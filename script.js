
document.addEventListener("DOMContentLoaded", () => {
  const language = document.getElementById("language");

  language.addEventListener("change", () => {
    const selected = language.value;

    if (selected !== "en") {
      alert(
        "Language selected: " + selected +
        ". Full translation will be added in the multilingual system."
      );
    }
  });

  console.log("NNC Global Platform initialized successfully.");
});
