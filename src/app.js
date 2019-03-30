//Declaración de variables 
txtName = document.getElementById('txt-name');
txtTestimony = document.getElementById('txt-testimony');
shareTestimonyBtn = document.getElementById('share-testimony');
let name = txtName.value;
let testimony = txtTestimony.value;

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//   Subir información a la bd testimonios
const saveTesimony = () => {
    db.collection("testimonies").add({
        name: name,
        testimony: testimony,

    })
        .then((docRef) => {
            txtName.value = "";
            txtTestimony = "";
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}


shareTestimonyBtn.addEventListener('click', saveTesimony);