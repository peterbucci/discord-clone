const darkTheme = {
  brand: "#5865F2",
  brand360: "#949CF7",
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
  buttonDangerBackground: "#D83C3E",
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
  primaryDark800HSL: "225 7.7% 10.2%",
  primaryDark900HSL: "240 11.1% 1.8%",
  primaryLight900HSL: "240 7.7% 2.5%",
  primary130HSL: "210 9.1% 95.7%",
  primary160HSL: "220 9.7% 93.9%",
  primary200HSL: "225 10% 92.2%",
  primary400HSL: "226.2 5.5% 53.5%",
  primary430HSL: "229.1 4.8% 44.9%",
  primary460HSL: "228 5.2% 38%",
  primary500HSL: "228 6% 32.5%",
  primary600HSL: "222.9 6.7% 20.6%",
  primary860HSL: "240 7.7% 2.5%",
  blue430HSL: "212.2 100% 45.3%",
  brand500HSL: "234.9 85.6% 64.7%",
  scrollbar: "hsl(220, 8%, 8%)",
  get brand500() {
    return `hsl(${this.brand500HSL}/1)`;
  },
  get primary130() {
    return `hsl(${this.primary130HSL}/1)`;
  },
  get primary160() {
    return `hsl(${this.primary160HSL}/1)`;
  },
  get primary200() {
    return `hsl(${this.primary200HSL}/1)`;
  },
  get primary430() {
    return `hsl(${this.primary430HSL}/1)`;
  },
  get primary460() {
    return `hsl(${this.primary460HSL}/1)`;
  },
  get primary500() {
    return `hsl(${this.primary500HSL}/1)`;
  },
  get primary600() {
    return `hsl(${this.primary600HSL}/1)`;
  },
  get primary860() {
    return `hsl(${this.primary860HSL}/1)`;
  },
  get blue430() {
    return `hsl(${this.blue430HSL}/1)`;
  },
  get textInputBorder() {
    return `hsl(${this.black500HSL} / 0.3)`;
  },
  get layerBackground() {
    return `hsl(${this.black500HSL} / 0.85)`;
  },
  get backgroundModifierAccent() {
    return `hsl(${this.primaryDark500HSL} / 0.48)`;
  },
  get backgroundModifierAccentLight() {
    return `hsl(${this.primary400HSL} / 0.24)`;
  },
  get backgroundModifierSelected() {
    return `hsl(${this.primaryDark500HSL} / 0.6)`;
  },
  get backgroundModifierHover() {
    return `hsl(${this.primaryDark500HSL} / 0.4)`;
  },
  get backgroundModifierHoverLight() {
    return `hsl(${this.primary400HSL} / 0.16)`;
  },
  get backgroundModifierActive() {
    return `hsl(${this.primaryDark500HSL} / 0.7)`;
  },
  get backgroundFloating() {
    return `hsl(${this.primaryDark800HSL})`;
  },
  get elevationLow() {
    return `0 1px 0 hsl(${this.primaryDark900HSL} / 0.2),
    0 1.5px 0 hsl(${this.primaryLight900HSL} / 0.05),
    0 2px 0 hsl(${this.primaryDark900HSL} / 0.05)`;
  },
  get elevationHigh() {
    return `hsl(${this.primaryDark500HSL} / 0.24);`;
  },
  get elevationStroke() {
    return `hsl(${this.primaryDark900HSL} / 0.15)`;
  },
  white: "#FFFFFF",
  black: "#000000",
};

export default darkTheme;
