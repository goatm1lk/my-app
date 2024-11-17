"use client"
import Header from "./components/Header";
import { useRouter } from "next/navigation";
const Index = ()=>{
  const router = useRouter()
  const routeToDittoPage = ()=>{
    router.push("/dittoPage")
  }
  return(
    <>
      <div className="pageBody">
        <div className="pageContents">
        <Header/>
          <div className="subBody1">
            <div className="subBody1Contents">
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={routeToDittoPage}>Ditto?</button>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}


export default Index;