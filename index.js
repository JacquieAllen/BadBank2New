function Spa(props, state){
    return(
        
        <HashRouter>
            <UserContext.Provider value={{users:[{name: 'Jacq', email:'jacq@test.com', password:"12345678", balance:600}], loggedIn:[]}}>
        
            <NavBar />
            <div className="container" style={{padding: '30px'}}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
            {/* <Route path="/login/" component={Login} /> */}
            <Route path="/navbar/" component={NavBar} />
            
            </div>
            </UserContext.Provider>
        </HashRouter>
    
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)
