export const FilterBlock = () => {
  return (
    <aside>
      <div>
        <label htmlFor="students">Is Hogwarts student</label>
        <input id="students" name="students" type="checkbox" />
      </div>
      <div>
        <label htmlFor="staff">Is Hogwarts staff</label>
        <input id="staff" name="staff" type="checkbox" />
      </div>
      <div>
          <label htmlFor="house">Choose house:</label>
          <select name="house">
              <option value="Gryffindor">Gryffindor"</option>
              <option value="Slytherin">Slytherin"</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
          </select>
      </div>
    </aside>
  );
};
