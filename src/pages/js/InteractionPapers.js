import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/GlobalContextProvider";

export default function InteractionPapers(props) {
  const id = props.match.params.id;  
  const { state, fetchInteraction } = useContext(Context);
  const { interaction } = state;

  const [selectedCourse, setSelectedCourse] = useState({});

  useEffect(() => {
    fetchInteraction();
  }, []);

  useEffect(() => {
    setSelectedCourse(interaction.length && interaction.filter(i => i.fields.courseCode == id)[0].fields);
  }, [interaction]);

  useEffect(() => {
    console.log(selectedCourse);
    console.log(id);
  }, [selectedCourse]);

  return <div><p>{selectedCourse.courseTitle}</p></div>;
}
