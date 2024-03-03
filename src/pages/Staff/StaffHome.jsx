import AddCourse from "../../components/Staff/AddCourse";
import StaffHeader from "../../components/Staff/StaffHeader";

function StaffHome() {
  return (
    <>
     <div className="w-screen">
     <div>
    
        <StaffHeader />
      </div>
      <div>
  
        <AddCourse />
      </div>

     </div>
    </>
  );
}
export default StaffHome;
