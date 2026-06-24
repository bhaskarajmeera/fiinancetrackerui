import React, { useEffect, useState } from 'react'
const financialTps=[
  {
    "tip": "Track your spending daily.",
    "quote": "What gets measured gets managed.",
    "expert": "Peter Drucker"
  },
  {
    "tip": "Create a monthly budget and stick to it.",
    "quote": "A budget is telling your money where to go instead of wondering where it went.",
    "expert": "Dave Ramsey"
  },
  {
    "tip": "Build an emergency fund of 3–6 months.",
    "quote": "Do not save what is left after spending; instead spend what is left after saving.",
    "expert": "Warren Buffett"
  },
  {
    "tip": "Avoid high‑interest debt like credit cards.",
    "quote": "Interest on debts grows without rain.",
    "expert": "Yiddish Proverb"
  },
  {
    "tip": "Invest early to benefit from compounding.",
    "quote": "Compound interest is the eighth wonder of the world.",
    "expert": "Albert Einstein"
  },
  {
    "tip": "Set clear financial goals.",
    "quote": "A goal without a plan is just a wish.",
    "expert": "Antoine de Saint‑Exupéry"
  },
  {
    "tip": "Review and cancel unused subscriptions.",
    "quote": "Small leaks sink great ships.",
    "expert": "Benjamin Franklin"
  },
  {
    "tip": "Live below your means.",
    "quote": "Wealth consists not in having great possessions, but in having few wants.",
    "expert": "Epictetus"
  },
  {
    "tip": "Automate your savings.",
    "quote": "The best way to save money is not to lose it.",
    "expert": "Jim Cramer"
  },
  {
    "tip": "Track your net worth regularly.",
    "quote": "What you don’t track, you can’t improve.",
    "expert": "Unknown"
  }
]

 const FinancialTips = () => {
const [showQuote,setShowQuote]= useState(financialTps[0]);
const {tip,quote,expert}=showQuote;

useEffect(()=>{
    setInterval(()=>{
        setShowQuote(financialTps[Math.floor(Math.random()*financialTps.length)])
    },3000)
},[])
  return (
    <div>
    <h4>
        {tip}
        </h4>  
        
        <div className='fw-bolder'>
"{quote}"  -{expert}
        </div>
    </div>
  )
}
export default FinancialTips;