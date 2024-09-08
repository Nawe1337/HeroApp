import  { useState } from 'react';
import './PlanesComponent.css';

const PlanesComponent = () => {
  const [planSeleccionado, setPlanSeleccionado] = useState("plan1");

  const handlePlanChange = (plan) => {
    setPlanSeleccionado(plan);
  };

  const planes = {
    
    plan1: [
      { title: 'Iron Man', desc: ' Tony Stark, a brilliant inventor and billionaire, creates an advanced technological suit to protect the world as Iron Man after a life-changing experience.', img: '1' },
      { title: 'Thor', desc: 'Thor Odinson, the god of thunder from Asgard, uses his divine power and his hammer Mjolnir to protect both Earth and the Nine Realms.', img: '2' },
      { title: 'Captain America', desc: ' Steve Rogers, an ordinary man turned supersoldier by the super-soldier serum, fights for justice and the ideals of freedom as the iconic Captain America.', img: '3' },
    ],
    plan2: [
      { title: 'Batman', desc: 'Batman es un vigilante de Gotham City, un héroe sin poderes que usa su intelecto, habilidades de combate y tecnología para luchar contra el crimen.', img: '1' },
      { title: 'Super man', desc: 'Superman es un kryptoniano con poderes sobrehumanos que protege la Tierra, siendo un símbolo de esperanza y justicia.', img: '2' },
      { title: 'Spider-Man', desc: 'Peter Parker, a young New Yorker, gains spider-like powers after being bitten by a radioactive spider and dedicates himself to fighting crime while balancing his personal life.', img: '3' },
    ],
   
  };

  return (
    <div className="planes-component">
      <div className="selector">
        <img 
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725038532/il_fullxfull.2300269378_b0r8_xhvzxl.webp" 
          alt="Foto 1" 
          onClick={() => handlePlanChange('plan1')} 
          className={`foto ${planSeleccionado === 'plan1' ? 'seleccionada' : ''}`} 
        />
        <img 
          src="https://res.cloudinary.com/dkk8nbi3b/image/upload/v1725038287/dc_comics_rebrand_by_luxaloverzy_dgy1myo-375w-2x_swhedw.jpg" 
          alt="Foto 2" 
          onClick={() => handlePlanChange('plan2')} 
          className={`foto ${planSeleccionado === 'plan2' ? 'seleccionada' : ''}`} 
        />
      </div>
      
      <div className="planes-container">
        {planes[planSeleccionado].map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.title}</h3>
            <span className={`${planSeleccionado === 'plan1'? 'spanMarvel':'spanDc'} `}>Top :{plan.img}</span>
            <p>{plan.desc}</p>
           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanesComponent;