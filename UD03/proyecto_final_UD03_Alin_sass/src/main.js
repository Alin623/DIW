import "./styles/main.scss";

const criteriaToggle = document.querySelector("[data-criteria-toggle]");

if (criteriaToggle instanceof HTMLButtonElement) {
  const criteriaPanel = document.getElementById("extra-criteria");

  if (criteriaPanel instanceof HTMLFieldSetElement) {
    criteriaToggle.addEventListener("click", () => {
      const isExpanded = criteriaToggle.getAttribute("aria-expanded") === "true";
      criteriaToggle.setAttribute("aria-expanded", String(!isExpanded));
      criteriaPanel.hidden = isExpanded;
    });
  }
}

const petSelect = document.querySelector("#pet-name");

if (petSelect instanceof HTMLSelectElement) {
  const requestedPet = new URLSearchParams(window.location.search).get("mascota");
  const hasPetOption = Array.from(petSelect.options).some(
    (option) => option.value.toLowerCase() === requestedPet?.toLowerCase(),
  );

  if (hasPetOption && requestedPet) {
    petSelect.value = Array.from(petSelect.options).find(
      (option) => option.value.toLowerCase() === requestedPet.toLowerCase(),
    )?.value ?? "";
  }
}

const adoptionForm = document.querySelector(".adoption-form");

if (adoptionForm instanceof HTMLFormElement) {
  adoptionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!adoptionForm.reportValidity()) {
      return;
    }

    const notice = adoptionForm.querySelector(".form-notice");

    if (notice) {
      notice.textContent =
        "Thanks! Your details are validated. This demo does not send or store your enquiry.";
    }
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const dogCards = document.querySelectorAll(".dog-card");
const filterStatus = document.querySelector("[data-filter-status]");

filterButtons.forEach((button) => {
  if (!(button instanceof HTMLButtonElement)) {
    return;
  }

  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute(
        "aria-pressed",
        String(filterButton === button),
      );
    });

    let visibleCount = 0;
    dogCards.forEach((card) => {
      const matches = filter === "all" || card.getAttribute("data-age") === filter;
      card.toggleAttribute("hidden", !matches);
      visibleCount += Number(matches);
    });

    if (filterStatus) {
      filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? "dog" : "dogs"} shown.`;
    }
  });
});
