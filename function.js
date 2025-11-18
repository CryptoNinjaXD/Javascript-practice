// var product1 = 600;
// var product2 = 600;
// var total = product1+product2;

// console.log('Your total is '+ total +'.')
// function count(){
//     if(total < 1000){
//         console.log('5% discount.', a())
//     }else if(total >1000 ){
//         console.log('8% discount.', a())
//     }else if(total >5000 ){
//         console.log('10% discount.', a())
//     }
// }

// function a(total){
//     if(total < 1000){
//         total*5/100
//     }else if(total >1000 ){
//         total*8/100
//     }else if(total >5000 ){
//         total*10/100
//     }
// }
// return count(total);

// const laptop = {
//   brand: "lenovo",
//   model: "legion",
//   getVariant: {
//     processer: "i5",
//     ram: "16GB",
//   },
// };

// console.log(laptop.getVariant);
//lenovo
{
  {
    const laptop1 = {
      brand: "lenovo",
      model: "legion",
      getVariant1() {
        let processer = "i5";
        let ram1 = "16GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color1,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "i7";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color2,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
      },
    };
    laptop1.getVariant1();
    laptop1.getVariant2();
  }
  {
    const laptop2 = {
      brand: "lenovo",
      model: "LOQ",
      getVariant1() {
        let processer = "i7";
        let ram1 = "16GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color3,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "r9";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color4,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
        color4: "Cole Black",
      },
    };
    laptop2.getVariant1();
    laptop2.getVariant2();
  }
}
//asus
{
  {
    const laptop1 = {
      brand: "ASUS",
      model: "Vivobook 15",
      getVariant1() {
        let processer = "i5";
        let ram1 = "16GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color1,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "i7";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color2,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
      },
    };
    laptop1.getVariant1();
    laptop1.getVariant2();
  }
  {
    const laptop2 = {
      brand: "ASUS",
      model: "Vivobook 16x",
      getVariant1() {
        let processer = "i7";
        let ram1 = "16GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color3,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "r9";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color4,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
        color4: "Cole Black",
      },
    };
    laptop2.getVariant1();
    laptop2.getVariant2();
  }
}
//HP
{
  {
    const laptop1 = {
      brand: "HP",
      model: "Victus",
      getVariant1() {
        let processer = "i5";
        let ram1 = "16GB";
        let gpu = "RTX 3050";
        console.log(
          "Processer = ",
          processer,
          ", GPU =",
          gpu,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color1,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "i7";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color2,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
      },
    };
    laptop1.getVariant1();
    laptop1.getVariant2();
  }
  {
    const laptop2 = {
      brand: "lenovo",
      model: "LOQ",
      getVariant1() {
        let processer = "i7";
        let ram1 = "16GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color3,
          ", Ram = ",
          ram1
        );
      },
      getVariant2() {
        let processer = "r9";
        let ram2 = "32GB";
        console.log(
          "Processer = ",
          processer,
          ", Brand = ",
          this.brand,
          ", Model is = ",
          this.model,
          ", Color is = ",
          this.getcolor.color4,
          ", Ram = ",
          ram2
        );
      },
      getcolor: {
        color1: "Grey",
        color2: "Black",
        color3: "Mat Blue",
        color4: "Cole Black",
      },
    };
    laptop2.getVariant1();
    laptop2.getVariant2();
  }
}
