import { useEffect, useState } from "react";
import Person from "../Person";

export default function PersonController() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      const res = await fetch("https://www.randomuser.me/api?results=1");
      const data = await res.json();
      const user = data.results[0];
      setPerson({
        first_name: user.name.first,
        last_name: user.name.last,
        email: user.email,
      });
    };
    getPerson();
  }, []);

  return <Person person={person} />;
}
