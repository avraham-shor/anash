import { useEffect, useState } from 'react';
import anash from './assets/anash.json';
import { Card } from './utiles/card.jsx';

function App() {
  const [items] = useState(anash);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchPhone, setSearchPhone] = useState('');
  const [searchName, setSearchName] = useState('');

  // useEffect(() => {
  //   setItems(anash);
  //   setFilteredItems(anash);
  // }, []);

  function searchByPhone(number) {

    console.log(number);
    const filteredItems = items.filter(item => {
      return item.husband_mobile?.includes(number) ||
        item.wife_mobile?.includes(number) ||
        item.system_phone_1?.includes(number) ||
        item.system_phone_2?.includes(number) ||
        item.home_phone?.includes(number)
    });
    console.log(filteredItems.length);
    setFilteredItems(filteredItems);
  }

  function searchByName(name) {
    console.log(name);
    const filteredItems = items.filter(item => {
      return item.full_name_search?.includes(name)
    });
    console.log(filteredItems.length);
    setFilteredItems(filteredItems);
  }

  return (
    <div className="App">
      <h1>רשימת אנ"ש לפי מספר טלפון</h1>

        <div>
          <input 
          type="text" 
          id="phone" 
          placeholder="הכנס מספר או חלק ממספר טלפון" 
          className='search-input'
          onChange={(e) => {
            setSearchPhone(e.target.value);
            setSearchName('');
          }}
          value={searchPhone}
          />
          <button className='search-button' onClick={() => searchByPhone(searchPhone)}>חפש לפי טלפון</button>
        </div>

        <div>
          <input 
          type="text" 
          id="name" 
          placeholder="הכנס שם" 
          className='search-input'
          onChange={(e) => {
            setSearchName(e.target.value);
            setSearchPhone('');
          }}
          value={searchName}
          />
          <button className='search-button' onClick={() => searchByName(searchName)}>חפש לפי שם</button>
        </div>
        {filteredItems.length > 0 && <ul>
          {filteredItems.map(
            item => <div key={item.id}>
              <Card item={item} />
            </div>
          )}
        </ul>}
      {filteredItems.length === 0 && <div>
        <p>לא נמצאו תוצאות</p>
        <button className='search-button' onClick={() => setFilteredItems(items)}>הצג את כל הרשימה</button>
      </div>}
    </div>
  );
}

export default App
