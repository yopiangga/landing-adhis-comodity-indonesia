import withProtected from "hoc/withProtected";
import LayoutDashboard from "layout/dashboard/index";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getMessages } from "services/message_services";
import { getUsers, deteleUser } from "services/user_services";

function DashboardUsers() {
  // const data = [{}, {}, {}, {}, {}, {}];
  const [data, setData] = useState([]);

  useEffect(() => {
    getMessages()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  // function handleDelete(id) {
  //   deleteUser(id);
  // }

  return (
    <LayoutDashboard menuActive="1" title="Seluruh Pengguna">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Pesan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((el, index) => {
                  return (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{el?.data?.name}</td>
                      <td>
                        <a
                          className="hover:text-blue-400"
                          href={`mailto:${el?.data?.email}`}
                        >
                          {el?.data?.email}
                        </a>
                      </td>
                      <td>{el?.data?.text}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default DashboardUsers;
