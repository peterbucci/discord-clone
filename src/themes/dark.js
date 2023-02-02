const darkTheme = {
  brand: "#5865F2",
  brand560: "#4752c4",
  brand600: "#3d46a8",
  textNormal: "#DCDDDE",
  textMuted: "#a3a6aa",
  textLink: "#00aff4",
  textPositive: "#46C46E",
  textDanger: "#f38688",
  backgroundPrimary: "#36393F",
  backgroundSecondary: "#2f3136",
  backgroundSecondaryAlt: "#292B2F",
  backgroundTertiary: "#202225",
  backgroundHover: "#18191c",
  backgroundLoading: "#2a2b32",
  channelsDefault: "#96989D",
  channelIcon: "#8E9297",
  interactiveNormal: "#B9BBBE",
  interactiveMuted: "#4f545c",
  buttonSecondaryBackgroundHover: "#686d73",
  channelTextAreaBackground: "#40444b",
  channelTextAreaPlaceholder: "#72767d",
  statusGreen660: "#2d7d46",
  statusGreen600: "#3BA55D",
  statusDanger: "#EE4245",
  statusOffline: "#747f8d",
  statusAFK: "#faa61a",
  infoDangerForeground: "#ED4245",
  black500HSL: "0 0% 0%",
  white500HSL: "0 0% 100%",
  primaryDark500HSL: "217 7.6% 33.5%",
  primaryDark900HSL: "240 11.1% 1.8%",
  primaryLight900HSL: "240 7.7% 2.5%",
  get textInputBorder() {
    return `hsl(${this.black500HSL} / 0.3)`;
  },
  get backgroundModifierAccent() {
    return `hsl(${this.primaryDark500HSL} / 0.48)`;
  },
  get backgroundModifierSelected() {
    return `hsl(${this.primaryDark500HSL} / 0.6)`;
  },
  get backgroundModifierHover() {
    return `hsl(${this.primaryDark500HSL} / 0.4)`;
  },
  get backgroundModifierActive() {
    return `hsl(${this.primaryDark500HSL} / 0.7)`;
  },
  get elevationLow() {
    return `0 1px 0 hsl(${this.primaryDark900HSL} / 0.2),
    0 1.5px 0 hsl(${this.primaryLight900HSL} / 0.05),
    0 2px 0 hsl(${this.primaryDark900HSL} / 0.05)`;
  },
  get elevationStroke() {
    return `hsl(${this.primaryDark900HSL} / 0.15)`;
  },
  white: "#FFFFFF",
  black: "#000000",
};

export default darkTheme;
