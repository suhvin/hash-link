const goLink = (option: string) => {
  switch (option) {
    case "slack":
      window.open("https://hashlinkhq.slack.com", "_blank");
      break;
    default:
      break;
  }
};

export default goLink;
