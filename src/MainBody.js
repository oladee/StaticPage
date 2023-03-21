import Ellipse from "./Ellipse 1.svg";
export default function MainBody(){
    return (
        <>
        <div className="content">
            <h4>
            Fun facts about React
            </h4>
            <div>
               <div>
                    <img src={Ellipse} alt="bullet" />
                    <p>Was first released in 2013</p>
               </div>
               <div>
                    <img src={Ellipse} alt="bullet" />
                    <p>Was originally created by Jordan Walke</p>
               </div>
               <div>
                    <img src={Ellipse} alt="bullet" />
                    <p>Has well over 100k stars on Github</p>
               </div>
               <div>
                    <img src={Ellipse} alt="bullet" />
                    <p>Is maintained by facebook</p>
               </div>
               <div>
                    <img src={Ellipse} alt="bullet" />
                    <p>Powers thousands of entreprise apps, including mobile apps </p>
               </div>
            </div>
        </div>
    </>
    )
}
