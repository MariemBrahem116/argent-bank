import React from 'react';
import chatIcon from '../Assets/icon-chat.png';
import moneyIcon from '../Assets/icon-money.png';
import securityIcon from '../Assets/icon-security.png';
import Feature from '../Components/Feature';
import '../Styles/HomePage.css'


function HomePage() {
  return (
    <main className="homeWrapper">
         <div className="hero">
            <section className="heroContent">
               <h2 className="sr-only">Promoted Content</h2>
               <p className="subtitle">No fees.</p>
               <p className="subtitle">No minimum deposit.</p>
               <p className="subtitle">High interest rates.</p>
               <p className="text">
                  Open a savings account with Argent Bank today!
               </p>
            </section>
         </div>

         <section className="features">
            <h2 className="sr-only">Features</h2>
            <Feature
               icon={chatIcon}
               iconType="Chat icon"
               title="You are our #1 priority"
               description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Feature
               icon={moneyIcon}
               iconType="Money icon"
               title="More savings means higher rates"
               description="The more you save with us, the higher your interest rate will be!"
            />
            <Feature
               icon={securityIcon}
               iconType="Security icon"
               title="Security you can trust"
               description="We use top of the line encryption to make sure your data and money is always safe."
            />
         </section>
      </main>
  )
}

export default HomePage