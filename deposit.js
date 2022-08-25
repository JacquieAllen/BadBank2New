function Deposit(){  
  const ctx                 = React.useContext(UserContext);
  const [value, setValue]   = React.useState('');
  const [update, setUpdate] = React.useState('false');
  const [show, setShow]     = React.useState(true);
  let inUser                = ctx.loggedIn[0];

  const handleContextChange = (event) => {
      setValue(event.target.value);
  };

  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  
  const dateString = `${mm}/${dd}/${year}`;

  function handleDeposit(){
      let balance = document.getElementById("balance").value;
      if (balance > 0 && !isNaN(balance)) {
      inUser.user.balance += Number(balance);
      setUpdate(true);
      setShow(false);
      }
      else{
          alert('Must Be a Positive Number');
      }

  }

  return (
      <Card
      bgcolor="primary"
      txtcolor="black"
      Header="Deposit that money!"
      body = {show? (inUser ? (
          <>
          <h4>{dateString} {update ? "Balance: " + inUser.user.balance : "Balance: "+ inUser.user.balance}</h4>
          <h5>Deposit this much</h5>
          <input type="number" width="300" id="balance" onChange={handleContextChange} value={value}></input>
          <bottom type="submit" disabled={ value ?false:true} className="btn btn-primary" onClick={handleDeposit}>Deposit that money!</bottom>
          
          </>
      ):("")):("Accepted! Your Deposit: $" + inUser.user.balance)}
     />
  )
}
