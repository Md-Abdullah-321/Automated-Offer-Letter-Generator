import logo from "/logo.jpg";
import mentorship from "/mentorship.jpg";
import program from "/programs.jpg";
import user from "/user.jpeg";
import work from "/work.jpg";

function UserDashboard() {
  return (
    <div className="p-3">
      {/* Hero section  */}
      <div className="flex">
        <div className="flex-1">
          {/* Organization name & logo  */}
          <div className="flex justify-center items-center w-full gap-4">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">
              Suvidha Foundation Internship
            </h1>
          </div>

          <div className="max-w-lg mx-auto mt-5">
            <h2 className="text-7xl font-extrabold">
              Join Our Impactful Internship Program and Make a Difference.
            </h2>
            <p className="mt-5 text-slate-600 text-lg">
              Empower Communities Through an Internship at Suvidha Foundation
            </p>

            <button
              type="button"
              className="mt-5 bg-slate-700 p-3 rounded-lg text-white"
            >
              Apply Now For Internship
            </button>
          </div>

          {/* Intern Review  */}
          <div className="max-w-lg mx-auto mt-7 flex justify-between">
            <div className="w-2/12">
              <img
                src={user}
                alt="user review"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="w-10/12">
              <h2 className="font-extrabold">
                “It was great experience to work in suvidha foundation, team
                work is very good. They conduct daily meetings to guide how to
                work,which they make our work more easy. So, overall it's
                amazing organization to learn. ”
              </h2>
              <p className="text-slate-600">Divina Malfoy</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={work} alt="" className="w-full h-full rounded-lg" />
        </div>
      </div>

      {/* About Our Mentorship */}
      <div className="flex mt-44 justify-between items-center">
        <img src={mentorship} alt="mentorship" className="w-6/12 rounded-lg" />

        <div className="w-6/12 p-10">
          <h2 className="text-4xl font-extrabold">
            Student Internship and Mentorship Programs.
          </h2>
          <p className="mt-2 text-slate-600 text-xl">
            At Suvidha Foundation, we offer a range of free internship
            opportunities, both technical and non-technical, as well as social
            work programs. Our internship programs aim to provide valuable
            hands-on experience to students and individuals, allowing them to
            contribute to our organization's initiatives and projects.
          </p>
        </div>
      </div>

      {/* About Our Programs */}
      <div className="flex mt-44 justify-between items-center">
        <div className="w-6/12 p-10">
          <h2 className="text-4xl font-extrabold">
            Why You Should Apply for This Internship.
          </h2>
          <p className="mt-2 text-slate-600 text-xl">
            Student internship and mentorship program at our NGO Suvidha
            Foundation (Suvidha Mahila Mandal) offers valuable opportunities for
            students to gain practical experience, contribute to meaningful
            projects, and receive guidance from experienced professionals in the
            nonprofit sector.During a student internship, individuals have the
            chance to work closely with the NGO's team, understanding its
            mission, values, and operations.
          </p>
        </div>
        <img src={program} alt="programs" className="w-6/12 rounded-lg" />
      </div>
    </div>
  );
}

export default UserDashboard;
