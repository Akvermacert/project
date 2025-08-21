// EDUCATION SECTION
document.getElementById("add-education").addEventListener("click", function() {
  const container = document.getElementById("education-container");
  const firstEntry = container.querySelector(".education-entry");
  const newEntry = firstEntry.cloneNode(true);

  newEntry.querySelectorAll("input").forEach(input => input.value = "");

  newEntry.querySelector(".remove-education").style.display = "inline";
  newEntry.querySelector(".remove-education").addEventListener("click", function() {
    container.removeChild(newEntry);
  });

  container.appendChild(newEntry);
});

// EXPERIENCE SECTION
document.getElementById("add-experience").addEventListener("click", function() {
  const container = document.getElementById("experience-container");
  const firstEntry = container.querySelector(".experience-entry");
  const newEntry = firstEntry.cloneNode(true);

  newEntry.querySelectorAll("input, textarea").forEach(input => {
    if (input.type !== "checkbox") input.value = "";
    if (input.type === "checkbox") input.checked = false;
  });

  newEntry.querySelector(".remove-experience").style.display = "inline";
  newEntry.querySelector(".remove-experience").addEventListener("click", function() {
    container.removeChild(newEntry);
  });

  const presentCheckbox = newEntry.querySelector("input[name='current-role']");
  const endMonthInput = newEntry.querySelector("input[name='end-month']");
  presentCheckbox.addEventListener("change", function() {
    endMonthInput.disabled = presentCheckbox.checked;
  });

  container.appendChild(newEntry);
});

const firstPresentCheckbox = document.querySelector(".experience-entry input[name='current-role']");
const firstEndMonthInput = document.querySelector(".experience-entry input[name='end-month']");
firstPresentCheckbox.addEventListener("change", function() {
  firstEndMonthInput.disabled = firstPresentCheckbox.checked;
});

//Project  SECTION
document.getElementById("add-project").addEventListener("click", function() {
  const container = document.getElementById("project-container");
  const firstEntry = container.querySelector(".project-entry");
  const newEntry = firstEntry.cloneNode(true);

  newEntry.querySelectorAll("input, textarea").forEach(input => {
    if (input.type !== "checkbox") input.value = "";
    if (input.type === "checkbox") input.checked = false;
  });

  newEntry.querySelector(".remove-project").style.display = "inline";
  newEntry.querySelector(".remove-project").addEventListener("click", function() {
    container.removeChild(newEntry);
  });

  const presentCheckbox1 = newEntry.querySelector("input[name='current-project']");
  const endMonthInput1 = newEntry.querySelector("input[name='end-month']");
  presentCheckbox1.addEventListener("change", function() {
    endMonthInput1.disabled = presentCheckbox1.checked;
  });

  container.appendChild(newEntry);
});

const firstPresentCheckbox1 = document.querySelector(".project-entry input[name='current-project']");
const firstEndMonthInput1 = document.querySelector(".project-entry input[name='end-month']");
firstPresentCheckbox1.addEventListener("change", function() {
  firstEndMonthInput1.disabled = firstPresentCheckbox1.checked;
});
// ========== LIVE PREVIEW ==========
// Update simple text fields
document.getElementById("Name").addEventListener("input", e => {
  document.getElementById("preview-name").innerText = e.target.value;
});
document.getElementById("email").addEventListener("input", e => {
  document.getElementById("preview-email").innerText = e.target.value;
});
document.getElementById("phone").addEventListener("input", e => {
  document.getElementById("preview-phone").innerText = e.target.value;
});
document.getElementById("summary").addEventListener("input", e => {
  document.getElementById("preview-summary").innerText = e.target.value;
});

// Update Education dynamically
function updateEducationPreview() {
  const container = document.getElementById("preview-education");
  container.innerHTML = "";
  document.querySelectorAll(".education-entry").forEach(entry => {
    const course = entry.querySelector("input[name='course']").value;
    const institute = entry.querySelector("input[name='institute']").value;
    const year = entry.querySelector("input[name='year']").value;
    if (course || institute || year) {
      const li = document.createElement("li");
      li.textContent = `${course} at ${institute} (${year})`;
      container.appendChild(li);
    }
  });
}
document.getElementById("education-container").addEventListener("input", updateEducationPreview);

// Update Skills dynamically
function updateSkillsPreview() {
  const container = document.getElementById("preview-skills");
  container.innerHTML = "";
  document.querySelectorAll("input[name='skills']:checked").forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.value;
    container.appendChild(li);
  });
  document.querySelectorAll("#custom-skill-list span").forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.textContent;
    container.appendChild(li);
  });
}
document.querySelectorAll("input[name='skills']").forEach(cb => cb.addEventListener("change", updateSkillsPreview));

document.getElementById("add-skill").addEventListener("click", function() {
  const skillInput = document.getElementById("custom-skill");
  const skillValue = skillInput.value.trim();

  if (skillValue !== "") {
    const skillContainer = document.getElementById("custom-skill-list");
    const skillTag = document.createElement("span");
    skillTag.textContent = skillValue;
    skillTag.style.marginRight = "10px";
    skillTag.style.padding = "5px 10px";
    skillTag.style.background = "#007BFF";
    skillTag.style.color = "#fff";
    skillTag.style.borderRadius = "4px";
    skillTag.style.cursor = "pointer";
    skillTag.title = "Click to remove";
    skillTag.addEventListener("click", () => {
      skillContainer.removeChild(skillTag);
      updateSkillsPreview();
    });

    skillContainer.appendChild(skillTag);
    skillInput.value = "";
    updateSkillsPreview(); // <<< ensures preview updates immediately
  }
});

// Update Experience dynamically
function updateExperiencePreview() {
  const container = document.getElementById("preview-experience");
  const experHeading = document.getElementById("Experience-header");
  let hasExprContent = false;
  container.innerHTML = "";
  document.querySelectorAll(".experience-entry").forEach(entry => {
    const role = entry.querySelector("input[name='role']").value;
    const company = entry.querySelector("input[name='company']").value;
    const start = entry.querySelector("input[name='start-month']").value;
    const endInput = entry.querySelector("input[name='end-month']");
    const end = endInput.disabled ? "Present" : endInput.value;
    const summary = entry.querySelector("textarea[name='work-summary']").value;

    if (role || company || start || summary) {
      hasExprContent = true;
      const li = document.createElement("li");
      li.innerHTML = `<strong>${role}</strong> at ${company} (${start} - ${end})<br>${summary}`;
      container.appendChild(li);
    }
  });
  experHeading.style.display = hasExprContent ? "block":"none";
}
document.getElementById("experience-container").addEventListener("input", updateExperiencePreview);
function showPreview() {
    const preview = document.getElementById('resume-preview');
    if (!preview.classList.contains('active')) {
        preview.classList.add('active');
    }
}

// Example: show preview on any input change
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', showPreview);
});

//update project dyamically
function updateProjectPreview() {
  const container = document.getElementById("preview-project");
  const heading = document.getElementById("Project-header");
  container.innerHTML = "";
  let hasContent = false;
  document.querySelectorAll(".project-entry").forEach(entry => {
    const projectName = entry.querySelector("input[name='projectName']").value;
    const start = entry.querySelector("input[name='start-month']").value;
    const endInput = entry.querySelector("input[name='end-month']");
    const end = endInput.disabled ? "Present" : endInput.value;
    const summary = entry.querySelector("textarea[name='work-summary']").value;

    if (projectName || start || summary) {
      hasContent=true;
      const li = document.createElement("li");
      li.innerHTML = `<strong>${projectName}</strong> (${start} - ${end})<br>${summary}`;
      container.appendChild(li);
    }
  });
  heading.style.display = hasContent ? "block":"none";
}
document.getElementById("project-container").addEventListener("input", updateProjectPreview);
function showPreview() {
    const preview = document.getElementById('resume-preview');
    if (!preview.classList.contains('active')) {
        preview.classList.add('active');
    }
}
