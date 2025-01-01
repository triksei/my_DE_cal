function showWelcomeSection() {
  document.getElementById('growth-decay-section').classList.add('hidden');
  document.getElementById('newton-section').classList.add('hidden');
  document.getElementById('welcome-section').classList.remove('hidden');
}

function showGrowthDecayCalculator() {
  document.getElementById('welcome-section').classList.add('hidden');
  document.getElementById('growth-decay-section').classList.remove('hidden');
  document.getElementById('newton-section').classList.add('hidden');
}

function showNewtonCalculator() {
  document.getElementById('welcome-section').classList.add('hidden');
  document.getElementById('newton-section').classList.remove('hidden');
  document.getElementById('growth-decay-section').classList.add('hidden');
}

function handleGrowthDecaySelection() {
  const selectedOption = document.getElementById('growthDecaySelect').value;
  const populationGrowthSection = document.getElementById('populationGrowthSection');
  const radiumDecaySection = document.getElementById('radiumDecaySection');
  
  if (selectedOption === 'populationGrowth') {
    populationGrowthSection.classList.remove('hidden');
    radiumDecaySection.classList.add('hidden');
  } else if (selectedOption === 'radiumDecay') {
    radiumDecaySection.classList.remove('hidden');
    populationGrowthSection.classList.add('hidden');
  } else {
    populationGrowthSection.classList.add('hidden');
 radiumDecaySection.classList.add('hidden');
  }
}

function handleNewtonsLawSelection() {
  const selectedOption = document.getElementById('newtonLawSelect').value;
  const lawOfcoolingSection = document.getElementById('lawOfcoolingSection');
  const lawOfheatingSection = document.getElementById('lawOfheatingSection');
  
  if (selectedOption === 'lawOfcooling') {
    lawOfcoolingSection.classList.remove('hidden');
    lawOfheatingSection.classList.add('hidden');
  } else if (selectedOption === 'lawOfheating') {
    lawOfheatingSection.classList.remove('hidden');
    lawOfcoolingSection.classList.add('hidden');
  } else {
    lawOfcoolingSection.classList.add('hidden');
 lawOfheatingSection.classList.add('hidden');
  }
}

function calculatePopulation() {
  const P0 = parseFloat(document.getElementById('P0').value);
  const P1 = parseFloat(document.getElementById('P1').value);
  const t1 = parseFloat(document.getElementById('t1').value);
  const P2 = parseFloat(document.getElementById('P2').value);

  const k = Math.log(P1 / P0) / t1;
  const P_req = P0 * Math.exp(k * P2);
  const growthRate = k * P_req;

  const result = `
      <h4>Solutions:</h4>
      <div style="height: 20px;"></div>
      <p>Step 1: Calculate growth constant (k)</p>
      <p>k = ln(P1 / P0) / t1</p>
      <p>k = ln(${P1} / ${P0}) / ${t1} = ${k.toFixed( 6)}</p>
      <div style="height: 20px;"></div>
      <p>Step 2: Calculate population after ${P2} years (P_req)</p>
      <p>P_req = P0 * e^(k * P2)</p>
      <p>P_req = ${P0} * e^(${k.toFixed(6)} * ${P2}) = ${P_req.toFixed(2)}</p>
      <div style="height: 20px;"></div>
      <p>Step 3: Calculate growth rate at t_req</p>
      <p>Growth rate = k * P_req</p>
      <p>Growth rate = ${k.toFixed(6)} * ${P_req.toFixed(2)} = ${growthRate.toFixed(2)} people/year</p>
      <div style="height: 20px;"></div>
      <h4>Final Results:</h4>
      <p>Population after ${P2} years: ${Math.round(P_req) + 1} people</p>
      <p>Growth rate at t=${P2} years: ${Math.round(growthRate) + 1} people/year</p>
            `;
  document.getElementById('populationResult').innerHTML = result;
  document.getElementById('populationResult').classList.remove('hidden');
}

function calculateRadium() {
  const Q0 = parseFloat(document.getElementById('Q0').value);
  const Q1 = parseFloat(document.getElementById('Q1').value);
  const t1 = parseFloat(document.getElementById('t1Radium').value);
  const unitRadium = document.getElementById('unitRadium').value;
  const unitTime = document.getElementById('unitTime').value;
  const t2 = parseFloat(document.getElementById('t2').value);

  const k = Math.log(Q1 / Q0) / t1;
  const Q_req = Q0 * Math.exp(k * t2);
  const halfLife = Math.log(2) / Math.abs(k);

  const result = `
      <h4>Solutions:</h4>
      <div style="height: 20px;"></div>
      <p>Step 1: Calculate decay constant (k)</p>
      <p>k = ln(Q1 / Q0) / t1</p>
      <p>k = ln(${Q1} / ${Q0}) / ${t1} = ${k.toFixed(10)}</p>
      <div style="height: 20px;"></div>
      <p>Step 2: Calculate radium amount after ${t2} ${unitTime} (Q_req)</p>
      <p>Q_req = Q0 * e^(k * t2)</p>
      <p>Q_req = ${Q0} * e^(${k.toFixed(10)} * ${t2}) = ${Q_req.toFixed(2)} ${unitRadium}</p>
      <div style="height: 20px;"></div>
      <p>Step 3: Calculate half-life of radium</p>
      <p>Half-life = ln(2) / |k|</p>
      <p>Half-life = ln(2) / ${Math.abs(k).toFixed(6)} = ${halfLife.toFixed(2)} ${unitTime}</p>
      <div style="height: 20px;"></div>
      <h4>Final Results:</h4>
      <p>Radium left after ${t2} ${unitTime}: ${Q_req.toFixed(2)} ${unitRadium}</p>
      <p>Half-life of radium: ${halfLife.toFixed(2)} ${unitTime}</p>
  `;
  document.getElementById('radiumResult').innerHTML = result;
  document.getElementById('radiumResult').classList.remove('hidden');
}

function calculateCooling() {
  const T0 = parseFloat(document.getElementById('T0').value);
  const Tm = parseFloat(document.getElementById('TmCooling').value);
  const T1 = parseFloat(document.getElementById('T1').value);
  const t1 = parseFloat(document.getElementById('t1Cooling').value);
  const tReq = parseFloat(document.getElementById('tReqCooling').value);
  const tempUnit = document.getElementById('tempUnitCooling').value;
  const timeUnit = document.getElementById('timeUnitCooling').value;

  const C = T0 - Tm;
  const k = Math.log((T1 - Tm) / C) / t1;
  const T_req = Tm + C * Math.exp(k * tReq);

  const result = `
      <h4>Solutions:</h4>
      <div style="height: 20px;"></div>
      <p>Step 1: Calculate C</p>
      <p>C = T0 - Tm = ${T0} - ${Tm} = ${C.toFixed(2)}</p>
      <div style="height: 20px;"></div>
      <p>Step 2: Calculate k</p>
      <p>k = ln((T1 - Tm) / C) / t1</p>
      <p>k = ln((${T1} - ${Tm}) / ${C.toFixed(2)}) / ${t1} = ${k.toFixed(6)}</p>
      <div style="height: 20px;"></div>
      <p>Step 3: Calculate temperature at t=${tReq} ${timeUnit}</p>
      <p>T(t) = Tm + C * e^(k * t)</p>
      <p>T(t) = ${Tm} + ${C.toFixed(2)} * e^(${k.toFixed(6)} * ${tReq}) = ${T_req.toFixed(2)} °${tempUnit}</p>
      <div style="height: 20px;"></div>
      <h4>Final Result:</h4>
      <p>Temperature at t=${tReq} ${timeUnit}: ${T_req.toFixed(2)} °${tempUnit}</p>
            `;
  document.getElementById('coolingResult').innerHTML = result;
  document.getElementById('coolingResult').classList.remove('hidden');
}
        
function calculateHeating() {
  const T0 = parseFloat(document.getElementById('T0Heating').value);
  const Tm = parseFloat(document.getElementById('TmHeating').value);
  const T1 = parseFloat(document.getElementById('T1Heating').value);
  const t1 = parseFloat(document.getElementById('t1Heating').value);
  const T_req = parseFloat(document.getElementById('TReqHeating').value);
  const tempUnit = document.getElementById('tempUnitHeating').value;
  const timeUnit = document.getElementById('timeUnitHeating').value;

  const C = T0 - Tm;
  const k = Math.log((T1 - Tm) / C) / t1; // Calculate k
  const tReq = Math.log((T_req - Tm) / C) / k; // Calculate time to reach T_req

  const result = `
      <h4>Solutions:</h4>
      <div style="height: 20px;"></div>
      <p>Step 1: Calculate C</p>
      <p>C = T0 - Tm = ${T0} - ${Tm} = ${C.toFixed(2)}</p>
      <div style="height: 20px;"></div>
      <p>Step 2: Calculate k</p>
      <p>k = ln((T1 - Tm) / C) / t1</p>
      <p>k = ln((${T1} - ${Tm}) / ${C.toFixed(2)}) / ${t1} = ${k.toFixed(6)}</p>
      <div style="height: 20px;"></div>
      <p>Step 3: Calculate time to reach T_req</p>
      <p>t = ln((T_req - Tm) / C) / k</p>
      <p>t = ln((${T_req} - ${Tm}) / ${C.toFixed(2)}) / ${k.toFixed(6)} = ${tReq.toFixed(2)} ${timeUnit}</p>
      <div style="height: 20px;"></div>
      <h4>Final Result:</h4>
      <p>Time to reach ${T_req} °${tempUnit}: ${tReq.toFixed(2)} ${timeUnit}</p>
            `;
  document.getElementById('heatingResult').innerHTML = result;
  document.getElementById('heatingResult').classList.remove('hidden');
}