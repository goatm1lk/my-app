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
              <h1>Hello World!</h1>
              <button onClick={routeToDittoPage}>Ditto?</button>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}


export default Index;