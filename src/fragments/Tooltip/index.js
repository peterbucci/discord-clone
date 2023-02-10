import { createPopper } from "@popperjs/core";
import React, { useState, useEffect, useCallback } from "react";
import { default as NewToolTip } from "components/Tooltip";

export default function Tooltip({
  children,
  placement = "bottom",
  offset = [0, 0],
  visibility = "click",
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [popperInstance, setPopperInstance] = useState(null);
  const [referenceEl, setReferenceEl] = useState(null);
  const [tooltipEl, setTooltipEl] = useState(null);

  const show = useCallback(() => {
    setShowTooltip(true);
    tooltipEl.setAttribute("data-show", "");
    popperInstance.update();
  }, [tooltipEl, popperInstance]);

  const hide = useCallback(
    (e) => {
      if (!tooltipEl.contains(e.target)) {
        setShowTooltip(false);
        tooltipEl.removeAttribute("data-show");
      }
    },
    [tooltipEl]
  );

  const onClick = useCallback(
    (e) => {
      if (tooltipEl.attributes["data-show"]) hide(e);
      else if (e.target === referenceEl) show();
    },
    [hide, show, tooltipEl, referenceEl]
  );

  const hoverEventListeners = useCallback(() => {
    const showEvents = ["mouseenter", "focus"];
    const hideEvents = ["mouseleave", "blur"];
    showEvents.forEach((event) => {
      referenceEl.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
      referenceEl.addEventListener(event, hide);
    });

    return () => {
      showEvents.forEach((event) => {
        referenceEl.removeEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        referenceEl.removeEventListener(event, hide);
      });
    };
  }, [hide, show, referenceEl]);

  const clickEventListeners = useCallback(() => {
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [onClick]);

  useEffect(() => {
    if (!popperInstance) return;

    let eventListeners = [];
    if (visibility === "hover") {
      eventListeners = hoverEventListeners();
    } else {
      eventListeners = clickEventListeners();
    }

    return () => eventListeners();
  }, [popperInstance, visibility, clickEventListeners, hoverEventListeners]);

  useEffect(() => {
    if (referenceEl && tooltipEl) {
      const newPopperInstance = createPopper(referenceEl, tooltipEl, {
        placement,
        strategy: "fixed",
        modifiers: [
          {
            name: "eventListeners",
            options: { scroll: false },
          },
          {
            name: "offset",
            options: {
              offset,
            },
          },
          {
            name: "flip",
            enabled: true,
          },
        ],
      });
      setPopperInstance(newPopperInstance);
    }
  }, [referenceEl, tooltipEl, offset, placement]);

  return children.map((child, i) =>
    i === 0 ? (
      React.cloneElement(child, { ref: setReferenceEl, key: i })
    ) : (
      <NewToolTip ref={setTooltipEl} role="tooltip" key={i}>
        {showTooltip && child}
      </NewToolTip>
    )
  );
}
