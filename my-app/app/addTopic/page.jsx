export default function AddTopic(){
   return (
    <form className=" flex flex-col gap-3">
        <input className=" border border-slate-500 py-2 px-8" type="text" placeholder="Topic title"/>
        <input className=" border border-slate-500 py-2 px-8" type="text" placeholder="Topic description"/>
        <button className=" bg-green-600 font-bold text-white py-3 px-6 w-fit" >Add Topic</button>
    </form>
   ) 
}