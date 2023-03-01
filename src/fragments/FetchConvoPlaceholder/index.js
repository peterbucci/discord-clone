import { default as Placeholder } from "components/FetchConvoPlaceholder";
import randomIntFromInterval from "helpers/random_int_from_interval";
import { useRef } from "react";

export default function FetchConvoPlaceholder() {
  const randomFloatFromInterval = (min, max) => {
    return (Math.random() * (max - min + 1) + min).toFixed(4);
  };

  const createListItem = (index) => {
    const hasHeader = Number(randomIntFromInterval(1, 2)) === 1 || index === 0;
    const hasAttachment = Number(randomIntFromInterval(1, 4)) === 1;
    const numberOfBlobs = Number(randomIntFromInterval(3, 8));
    return (
      <Placeholder.ListItem header={hasHeader} key={index}>
        <Placeholder.Contents>
          {hasHeader && (
            <>
              <Placeholder.Avatar />
              <Placeholder.Header
                width={randomFloatFromInterval(3, 10) + "rem"}
              />
            </>
          )}
          <Placeholder.Content>
            {[...Array(numberOfBlobs)].map((_, i) => {
              return (
                <Placeholder.Blob
                  key={i}
                  width={randomFloatFromInterval(1.5, 4) + "rem"}
                />
              );
            })}
          </Placeholder.Content>
        </Placeholder.Contents>
        {hasAttachment && (
          <Placeholder.Attachment
            width={randomIntFromInterval(125, 450) + "px"}
            height={randomIntFromInterval(125, 450) + "px"}
          />
        )}
      </Placeholder.ListItem>
    );
  };

  const listItemsRef = useRef([...Array(50)].map((_, i) => createListItem(i)));

  return <Placeholder>{listItemsRef.current}</Placeholder>;
}
