import React,{useState,useEffect} from 'react'
// import router from '../../../Routes/Payment';
import Datacontext from './Datacontext'
const Datastate = (props) => {
    //Users

    //Fetch users
    let Theme = 1;;
    const [Clients,setClients] = useState([]);
    useEffect(() => {
        async function GetClients(){
            const user = await fetch(`/api/users/fetchallusers`);
            if(!user.ok){
                window.alert("Some error occured");
                return;
            }
            const userRecord = await user.json();
            setClients(userRecord);
        }
        GetClients();
        return;
    }, [Clients.length]);

    const Addusers = async(month,year,Org_name,url,email,password,about,tagline,link1,link2,link3) =>{
        const add = await fetch(`/api/users/Adduser`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({month,year,Org_name,url,email,password,about,tagline,link1,link2,link3})
        });
        const newUser = await add.json();
        setClients(Clients.concat(newUser));
    }
    const updateuser = async(id,Org_name,url,email,password,about,link1,link2,link3,theme) =>{
        const response = await fetch (`/api/users/updateclient/${id}`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({Org_name,url,email,password,about,link1,link2,link3,theme})
        })
        const json = await response.json();
        let newdetails = JSON.parse(JSON.stringify(Clients));
        for (let index = 0; index < newdetails.length; index++) {
            const element = newdetails[index];
            if(element._id === id){
                newdetails[index].Org_name = Org_name;
                newdetails[index].url = url;
                newdetails[index].email = email;
                newdetails[index].about = about;
                newdetails[index].link1 = link1;
                newdetails[index].link2 = link2;
                newdetails[index].link3 = link3;
                newdetails[index].theme = theme;
            }
        }
        setClients(newdetails);
    }
    const Deleteuser = async(id)=>{
        const response = await fetch(`/api/users/deleteuser/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        const newuser = Clients.filter((cl,idx)=>{return cl._id !== id});
        setClients(newuser);
    }

    //Logic for userresponse
    const [UserResponse, setUserResponse] = useState([])
    useEffect(() => {
        async function GetUSers(){
            const event = await fetch(`/api/eventdata/fetcheventdata`);
            if(!event.ok){
                window.alert("Some error occured");
                return;
            }
            const eventRecord = await event.json();
            setUserResponse(eventRecord);
        }
        GetUSers();
        return;
    }, [UserResponse.length]);
    const pusheventdata = async(obj) =>{
        const pushRespo = await fetch(`/api/eventdata/pushdata`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const data =await pushRespo.json();
        setUserResponse(UserResponse.concat(data));
    }
    // Logic for Events

    //Fetch all Events DAta
    const [Events,setEvnets] = useState([]);
    useEffect(() => {
        async function GetEvents(){
            const event = await fetch(`/api/events/fetchallevents`);
            if(!event.ok){
                window.alert("Some error occured");
                return;
            }
            const eventRecord = await event.json();
            setEvnets(eventRecord);
        }
        GetEvents();
        return;
    }, [Events.length])
    //Add New Event Details in Database
    const AddEvent = async(obj)=>{
        const EventDetails = await fetch(`/api/events/Addevent`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const EventD = await EventDetails.json();
        setEvnets(Events.concat(EventD));
    }
    //Update Event Details in Databse
    const UpdateEvent = async(id,obj)=>{
        const NewDetails = await fetch(`/api/events/update/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        // eslint-disable-next-line
        const js = await NewDetails.json();
        //Pending Client side Logic
    }

    //Delete event
    const DeleteEvent = async(Eventname) =>{
        const response = await fetch(`/api/events/deleteEvent/${Eventname}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        const newEvents = Events.filter((event)=>{return event.org_url !== Eventname});
        setEvnets(newEvents);
    }
    //Event info

    //fetch eventinfo
    const [Eventin,setEventin] = useState([]);
    useEffect(() => {
        async function GetEventinfo(){
            const event = await fetch(`/api/Eventinfo/fetchinfo`);
            if(!event.ok){
                window.alert("Some error occured");
                return;
            }
            const eventRecord = await event.json();
            setEventin(eventRecord);
        }
        GetEventinfo();
        return;
    }, [Eventin.length]);

    //Add eventinfo
    const Addinfo = async(date,Org_name,eventname,org_url,about,response) =>{
        const addin = await fetch('/api/Eventinfo/Addinfo',{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({date,Org_name,eventname,org_url,about,response})
        })
        const newinfo = await addin.json();
        setEventin(Eventin.concat(newinfo));
    }
    //Delete EVnet info
    const DeleteEventinfo = async(Eventname) =>{
        const response = await fetch(`/api/Eventinfo/deleteinfo/${Eventname}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        const newEvents = Eventin.filter((event)=>{return event.org_url !== Eventname});
        setEventin(newEvents);
    }

    //Regestration data
    const [Registration, setRegistration] = useState([]);
    useEffect(()=>{
        async function formData(){
            const formdata = await fetch('/api/eventdata/fetcheventdata');
            if(!formdata.ok){
                window.alert("Some error occoured");
                return;
            }
            const Data = await formdata.json();
            setRegistration(Data);
        }
        formData();
        return;
    },[Registration.length]);
    const AddRegistration = async(obj) =>{
        const adddata = await fetch('/api/eventdata/pushdata',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(obj)
        })
        const newEntry = await adddata.json();
        setRegistration(Registration.concat(newEntry));
    }  
  return (
    <Datacontext.Provider value={{Clients,Addusers,updateuser, Deleteuser, AddEvent,UpdateEvent,Events,pusheventdata,Eventin,Addinfo,Registration,AddRegistration,DeleteEvent,DeleteEventinfo,Theme}}>
        {props.children}
    </Datacontext.Provider>
  )
}
export default Datastate