// References to DOM elements
const soilForm = document.getElementById('soilForm');
const soilInput = document.getElementById('soilType');
const cropInput = document.getElementById('cropType');
const recordsList = document.getElementById('recordsList');

// Add new soil record to Firestore
async function addSoilRecord(soilType, cropType) {
  try {
    await db.collection('soil_records').add({
      soilType: soilType,
      cropType: cropType,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("Record added successfully");
    loadRecords(); // refresh list
  } catch (error) {
    console.error("Error adding record: ", error);
  }
}

// Load soil records from Firestore
async function loadRecords() {
  recordsList.innerHTML = ""; // clear list first

  try {
    const querySnapshot = await db.collection('soil_records').orderBy("timestamp", "desc").get();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `Soil: ${data.soilType} - Crop: ${data.cropType}`;
      recordsList.appendChild(li);
    });
  } catch (error) {
    console.error("Error loading records: ", error);
  }
}

// Handle form submission
soilForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const soilType = soilInput.value.trim();
  const cropType = cropInput.value.trim();

  if (soilType && cropType) {
    addSoilRecord(soilType, cropType);
    soilForm.reset();
  } else {
    alert("Please fill in both fields");
  }
});
console.log("Firebase DB Reference:", db);


// Initial load
loadRecords();
