console.clear()
function generateButton(buttonName:string,hue:number,white :number , black :number){

 return`
 <!-- --------[${buttonName.toUpperCase()} BUTTON HTML ELEMENT]---------  -->
 <div class="${buttonName} btn_con">
   <span class="${buttonName} btn_text">${buttonName.toUpperCase()} BUTTON هذا الزر ملون</span>
 </div>


 //- -------[${buttonName.toUpperCase()} BUTTON CSS PROPERTIES]---------
.${buttonName}.btn_con {
  /** necessary properties */
  display: grid;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: fit-content;

  border-radius: 0.3em;
  padding: 0 0.3em;

  background: linear-gradient(90deg, hwb(${hue} 55 0 / 1) 0%, hwb(${hue} 66 0 / 1) 35%, hwb(${hue} 77 0 / 1) 100%);
  box-shadow: 0em 0.125em 0.188em -0.0625em hwb(${hue} ${white} ${black} / 1), 0em -0.313em 0.188em -0.313em hwb(${hue} ${white} ${black} / 1) inset;;



  /** as you like properties */
  font-size: 2rem;
  margin: 1.3rem;
}
.${buttonName}.btn_text {
  /** necessary properties */
  color: hwb(${hue} ${white} ${black} / 1);
  text-shadow: 0px -1px 0px hwb(${hue} 15 80 / 1), 0px 1px 0px hwb(${hue} 90 10 / 0.5);
  font-size: inherit;


  /** as you like properties */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-optical-sizing: auto;
}
`

}
//- EXAMPLES
// console.log(generateButton("yy",250,14,84))
console.log(generateButton("yellow",43,0,71))