import supabase from "./Client";



let OriginalID=null;
let id = null;

const User = async () => {
    const { data, error } = await supabase.auth.getUser();
   

    if (data) {
      const { user } = data;
      OriginalID = user.id;

      let { data: Users, error } = await supabase
      .from('Users')
      .select('id')
        .eq("userID", OriginalID);

        if(Users){
            id = Users[0].id;
        }

        if (error) {
            console.log(error);
        }
    }

    if (error) {
        console.log(error);
    }

    return id;

}

export default User;