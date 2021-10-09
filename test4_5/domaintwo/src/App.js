import './App.css';

function App() {
  const domainOne = window.parent;

  window.onmessage = function(e) {
    let payload = JSON.parse(e.data);
    switch (payload.method) {
      case 'set':
        localStorage.setItem(payload.key, payload.data);
        console.log('Данные записаны')
        break;
    
      case 'get':
        let data = localStorage.getItem(payload.key);
        domainOne.postMessage({type: typeof(data),data}, "*");
        break;

        case 'delete':
          localStorage.removeItem(payload.key);
          console.log('Данные удалены')
          break;

      default:
        break;
    }
    postMess(function (count) {
      localStorage.setItem('countDomainTwo', count)
    },localStorage.length)
  }

  function postMess(value, args) {
    let type = typeof value;
    if (type === "function")
    value = String(value);
    domainOne.postMessage({
      type, 
      value, 
      args
    },"*")
  }

  function initData(){
    localStorage.setItem('key1','data1');
    localStorage.setItem('key2','data2');
    localStorage.setItem('key3','data3');
    console.log('Данные занесены в хранилище')
  }

    return (
      <div>
        <h2>Страница 2</h2>
        <p>Записать начальные данные в localStorage:</p>
        <button onClick={()=>initData()}>Записать</button>
      </div>
    );
}

export default App;
