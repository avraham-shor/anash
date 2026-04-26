import { useEffect, useState } from 'react';
import anash from './assets/anash.json';
import { Card } from './utiles/card.jsx';
import { synagogues } from './utiles/synagogues.jsx';

function App() {
  const [items] = useState(anash);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchPhone, setSearchPhone] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchSynagogue, setSearchSynagogue] = useState('');


  function filterByPhone(number, currentSynagogue = searchSynagogue) {
    let itemsToFilter = items;
    if (currentSynagogue) {
      itemsToFilter = itemsToFilter.filter(item => {
        return item.synagogue?.includes(currentSynagogue)
      });
    }
    return itemsToFilter.filter(item => {
      return item.husband_mobile?.includes(number) ||
        item.wife_mobile?.includes(number) ||
        item.system_phone_1?.includes(number) ||
        item.system_phone_2?.includes(number) ||
        item.home_phone?.includes(number) ||
        item.whatsapp_number?.includes(number)
    });
  }

  function filterByName(name, currentSynagogue = searchSynagogue) {
    let itemsToFilter = items;
    if (currentSynagogue) {
      itemsToFilter = itemsToFilter.filter(item => {
        return item.synagogue?.includes(currentSynagogue)
      });
    }
    const partsOfName = name.split(' ');
    return itemsToFilter.filter(item => {
      return partsOfName.every(part => item.full_name_search?.includes(part))
    });
  }

  function searchBySynagogue(synagogue) {
    let itemsToFilter = items;
    if (searchPhone) {
      itemsToFilter = filterByPhone(searchPhone, synagogue);
    } else if (searchName) {
      itemsToFilter = filterByName(searchName, synagogue);
    } else if (synagogue) {
      itemsToFilter = itemsToFilter.filter(item => {
        return item.synagogue?.includes(synagogue)
      });
    }

    setFilteredItems(itemsToFilter);
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
        <button className='search-button' onClick={() => setFilteredItems(filterByPhone(searchPhone))}>חפש לפי טלפון</button>
      </div>

      <div>
        <input
          type="text"
          id="name"
          placeholder="הכנס שם (חיפוש חופשי)"
          className='search-input'
          onChange={(e) => {
            setSearchName(e.target.value);
            setSearchPhone('');
          }}
          value={searchName}
        />
        <button className='search-button' onClick={() => setFilteredItems(filterByName(searchName))}>חפש לפי שם</button>
      </div>

      <div>
        <select
          id="synagogue"
          className='search-select'
          value={searchSynagogue}
          onChange={(e) => {
            setSearchSynagogue(e.target.value);
            searchBySynagogue(e.target.value);
          }}
        >
          <option value="">חפש לפי בית כנסת</option>
          {synagogues.map(synagogue => (
            <option key={synagogue.value} value={synagogue.value}>
              {synagogue.lable}
            </option>
          ))}
        </select>
      </div>
      {filteredItems.length > 0 && <div className='search-container'>
        <h3>נמצאו {filteredItems.length} תוצאות</h3>
        <ul>
          {filteredItems.map(
            item => <div key={item.id}>
              <Card item={item} />
            </div>
          )}
        </ul>
      </div>
      }
      {filteredItems.length === 0 && <div>
        <p>לא נמצאו תוצאות</p>
        <button className='search-button' onClick={() => setFilteredItems(items)}>הצג את כל הרשימה</button>
      </div>}
    </div>
  );
}

export default App
