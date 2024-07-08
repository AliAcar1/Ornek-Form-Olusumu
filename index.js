const formIn = document.querySelector("#myform")

formIn.addEventListener('submit', function(event){
    
    event.preventDefault();
    
    let userName = formIn.elements.name.value;
    let surName = formIn.elements.surname.value;
    let phNumber = formIn.elements.phonenumber.value;
    let adress = formIn.elements.address.value;

    if(userName.length == 0 || surName.length == 0 || phNumber.length == 0|| adress.length == 0){
        alert("lütfen bütün bilgileri tam olarak giriniz")
    }else{ 
        alert("bilgileriniz başarı ile kaydedildi") 
        function consolePrint(){
            console.log("User Name: ",userName)
            console.log("User Surame: ",surName)
            console.log("User Phone Number: ",phNumber)
            console.log("User Address: ",adress)
        }
        return consolePrint();
    }



}
)