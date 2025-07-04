import React from "react";
import {
  GraduationCap,
  TrendingUp,
  Heart,
  Award,
  Drama,
  Dribbble,
} from "lucide-react";

function FindMore() {
  return (
    <section className="p-10 xl:h-[2000px] sm:h-[2200px] sm:overflow-y-hidden  w-[100%] flex flex-col  mt-10 overflow-x-hidden ">
      {/*4 cards*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28 p-8 text-center">
        <div>
          <div className="bg-red-700 p-3 rounded-md inline-block mb-2">
            <TrendingUp className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">81%</h3>
          <p className="text-red-700 font-semibold font-roboto">Pass Rate</p>
          <p className="text-gray-500 text-sm font-roboto">
            Strong Results, Bright Future
          </p>
        </div>

        <div>
          <div className="bg-red-700 p-3 rounded-md inline-block mb-2">
            <Heart className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">4.1/5</h3>
          <p className="text-red-700 font-semibold font-roboto">
            Student Satisfaction
          </p>
          <p className="text-gray-500 text-sm font-roboto">
            Empowered, and Inspired
          </p>
        </div>

        <div>
          <div className="bg-red-700 p-3 rounded-md inline-block mb-2">
            <Award className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">10+</h3>
          <p className="text-red-700 font-semibold font-roboto">
            Student Organization
          </p>
          <p className="text-gray-500 text-sm font-roboto">
            Empowering Tomorrow’s Leaders
          </p>
        </div>

        <div>
          <div className="bg-red-700 p-3 rounded-md inline-block mb-2">
            <GraduationCap className="text-white w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">1300+</h3>
          <p className="text-red-700 font-semibold font-roboto">
            Active Students
          </p>
          <p className="text-gray-500 text-sm font-roboto">
            Driven, Dynamic, Student Life
          </p>
        </div>
      </div>

      {/*curricular*/}

      <div className="mt-20 flex flex-col lg:flex-row items-start justify-between gap-16 xl:mr-10 ">
        <div className="relative w-full lg:w-1/2 h-[430px] flex items-start justify-center">
          <img
            src="src/Components/images/Rectangle 204.png"
            alt=""
            className="w-[300px] h-[360px] object-cover rounded-md ml-7"
          />

          <img
            src="src/Components/images/Rectangle 202.png"
            alt=""
            className="absolute top-[-40px] left-[30px] w-[200px] h-[231px] object-cover rounded-md   ml-14"
          />

          <img
            src="src/Components/images/Rectangle 203.png"
            alt=""
            className="absolute bottom-[-35px] left-[180px] w-[222px] h-[231px] object-cover rounded-md   ml-48 z-20"
          />

          <div className="absolute bottom-[-50px] left-[110px] w-[320px] h-[130px] bg-red-700 text-white px-5 py-4 rounded-md flex items-center gap-3 shadow-xl z-10">
            <Award className="w-7 h-7" />
            <div>
              <p className="text-2xl font-bold font-roboto leading-none">60+</p>
              <p className="text-sm leading-tight mt-1 font-roboto">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 ">
          <h2 className="text-4xl font-bold mb-4 font-roboto">Co-curricular</h2>
          <p className=" text-md mb-6 leading-relaxed font-roboto font-bold">
            At our school, co-curricular activities play a vital role in
            developing well-rounded students. From sports and clubs to arts and
            leadership programs, these activities complement academics by
            building confidence, teamwork, and real-world skills in a fun and
            engaging environment.
          </p>

          <div className="space-y-4 mt-10">
            <div className="flex flex-col border rounded-lg px-6 py-4 shadow-sm ">
              <div className="flex items-center gap-2 mb-1">
                <Dribbble className="w-7 h-7" />
                <h3 className="text-lg font-semibold font-roboto">Sports</h3>
              </div>
              <p className="text-lg text-gray-600 ml-8 font-roboto">
                Soccer, Netball, Basketball, Athletics, Volleyball, Tennis,{" "}
                <br />
                Rugby, Cricket, Chess.
              </p>
            </div>

            <div className="flex flex-col border rounded-lg px-6 py-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Drama className="w-7 h-7" />
                <h3 className="text-lg font-semibold font-roboto">Clubs</h3>
              </div>
              <p className="text-lg text-gray-600 ml-8 font-roboto">
                Debate, Choir, Art, Science, Interact, Environmental, Chess,
                Scripture Union, Entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*academics*/}
      <div className="mt-20 flex flex-col lg:flex-row items-start justify-between gap-36 ">
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 xl:ml-32">
          <h2 className="text-3xl font-bold mb-4 font-roboto">Academics</h2>
          <p className=" text mb-6 leading-relaxed font-roboto font-bold">
            At our school, co-curricular activities play a vital role in
            developing well-rounded students. From sports and clubs to arts and
            leadership programs, these activities complement academics by
            building confidence, teamwork, and real-world skills in a fun and
            engaging environment.
          </p>

          <div className="space-y-4 mt-10">
            <div className="flex flex-col border rounded-lg px-6 py-4 shadow-sm ">
              <div className="flex items-center gap-2 mb-1">
                <img src="src/Components/images/Rectangle 214.png" alt="" />
                <h3 className="text-lg font-semibold font-roboto">ZIMSEC</h3>
              </div>
              <p className="text-lg text-gray-600 ml-8 font-roboto">
                All Subjects In Zimbabwe
              </p>
            </div>

            <div className="flex flex-col border rounded-lg px-6 py-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <img src="src/Components/images/Rectangle 215.png" alt="" />
                <h3 className="text-lg font-semibold font-roboto">HEXCO</h3>
              </div>
              <p className="text-lg text-gray-600 ml-8 font-roboto">
                Computer Science, Food & Beverages, Housekeeping
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[430px] flex justify-center  ">
          <img
            src="src/Components/images/Rectangle 207.png"
            alt=""
            className="w-[323px] h-[460px] object-cover rounded-md ml-9"
          />

          <img
            src="src/Components/images/Rectangle208.png"
            alt=""
            className="absolute top-[170px] left-[-80px] w-[200px] h-[231px] object-cover rounded-md   ml-20"
          />
          <div className="absolute top-[290px] left-[150px]  bg-red-700 w-40 h-40 rounded-full flex justify-center items-center">
            <div className="text-sm font-bold text-white">
              1,300+ Active Learns
            </div>
          </div>
        </div>
      </div>

      {/* Card 2*/}
      <div className="relative w-full h-[410px] rounded-lg  shadow-md mt-36">
        <img
          src="src/Components/images/download (7) 1 (2).png"
          alt=""
          className="w-full h-full object-cover rounded-md "
        />

        <div className="absolute inset-0  flex items-end">
          <div className=" text-white text-2xl font-roboto  ml-28 mb-28  max-w-3xl ">
            Mosi-Oa-Tunya High School, located in Victoria Falls, Zimbabwe, is a
            distinguished educational institution established in 1982. Named
            after the indigenous term for Victoria Falls, meaning "The Smoke
            That Thunders," the school is dedicated to academic excellence and
            holistic development.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindMore;
