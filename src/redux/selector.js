export const getdetails = (state) => {
    
    return state.Contacts.data
};

export const sortbyasc = (state) => {

   const sortedarr =  state.Contacts.data.map(x=>x.name).sort((x,y)=>{
        if(x>y){
            return 1
        }else if(x<y){
            return -1
        }else{
            return 0
        }
    })
    return sortedarr;
  };
  export const sortbydsc = (state) => {
    
    const sortedarr =  state.Contacts.data.map(x=>x.name).sort((x,y)=>{
      if(x>y){
          return -1
      }else if(x<y){
          return 1
      }else{
          return 0
      }
  })
  return sortedarr;
  };