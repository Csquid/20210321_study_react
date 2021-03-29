import React, { Component } from 'react';
import Subject from './Components/Subject';
import List from './Components/List';
import ReadContent from './Components/Content/ReadContent';
import CreateContent from './Components/Content/CreateContent';
import UpdateContent from './Components/Content/UpdateContent';
import Controll from './Components/Controll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      // eve: 직전
      modeEve: null,
      listNowIDX: 0,
      listLastIDX: 2,
      subject: {
        title: "Web",
        description: "World wide web!"
      },
      welcome: {
        title: "Welcome",
        description: "Hello, React!!"
      },
      lists: [
        { id: 0, title: 'HTML',       description: 'HTML is for information' }, 
        { id: 1, title: 'CSS',        description: 'CSS is for design' }, 
        { id: 2, title: 'JavaScript', description: 'JavaScript is for information' }
      ],
    }
  }

  render() {
    console.log('App render');

    /*
    *   @Param getType This is getType                (param getType은 반환할 타입을 지정한다.)
    *   @Param First  getType: list --> return list   ('list' 를 넘길경우 list를 준다.)
    *   @Param Second getType: integer --> return i   ('idx'  를 넘길경우 integer 형의 i를 넘긴다.)
    * 
    */
    let getList = (getType) => {
      for(let i = 0; i < this.state.lists.length; i++) {
        if(this.state.listNowIDX === this.state.lists[i].id) {
          if(getType === 'list')
            return this.state.lists[i];
          else if (getType === 'idx')
            return i;
        }
      }
      return null;
    }
    let _list = getList('list');
    let _listIDX = getList('idx');
    // let _listIDX = getIDX();

    let _title, _description, _article = null;
    let _listTitle = null;
    let _listLastIDX = this.state.listLastIDX;
    let _listDescription = null;


    if(this.state.mode !== 'welcome' && _list !== null) {
      // _listLastIDX = this.state.listLastIDX;
      _listTitle = _list.title;
      _listDescription = _list.description;
      // _listDescription = this.state.lists[this.state.listNowIDX].description;
    }

    switch (this.state.mode) {
      case 'welcome': 
        _title = this.state.welcome.title;
        _description = this.state.welcome.description;
        break;
      case 'read': 
        _title = _listTitle;
        _description = _listDescription;
        break;
      case 'create':
        _listLastIDX += 1;
        _article = 
        <CreateContent 
          onCreatePage={(nTitle, nDescription) => {
            let addLists = this.state.lists.concat (
              { id:_listLastIDX, title: nTitle, description: nDescription }
            );
            
            this.setState({
              lists: addLists,
              // change read mode
              mode: 'read',
              modeEve: 'read',
              listNowIDX: _listLastIDX,
              listLastIDX: _listLastIDX
            });
          }}
        ></CreateContent>
        break;
      case 'update':
        console.log(_title);
        _article = 
          <UpdateContent 
            title={_listTitle} 
            description={_listDescription}
            onUpdatePage={(nTitle, nDescription) => {
              let updateLists = Array.from(this.state.lists);
              updateLists[this.state.listNowIDX] = { id:this.state.listNowIDX, title: nTitle, description: nDescription };
              
              this.setState({
                lists: updateLists,
                mode: 'read',
                modeEve: 'read',
              })
            }}
          >
              
          </UpdateContent>
        break;
      default:
        break;
    }
    if (this.state.mode === 'welcome' || this.state.mode === 'read') {
      _article = <ReadContent title={_title} description={_description}></ReadContent>
    }

    return (
      <div className="App">
        <Subject title={this.state.subject.title} description={this.state.subject.description}
          // custom
          onChangePage={() => {
            this.setState({ mode: "welcome" });
          }}
        ></Subject>

        <List data={this.state.lists}
          onChangePage={(idx) => {
            this.setState({ 
              mode: 'read', 
              modeEve: 'read', 
              listNowIDX: Number(idx)
            });
          }}
        ></List>

        <Controll onChangePage={(nMode) => {
          if(nMode === 'delete') {
            if(this.state.modeEve !== 'read') {
              alert('read 페이지가 아닙니다.');
              return;
            }
            
            // let _listNowIDX = this.state.listNowIDX;
            let _listNowIDX = _listIDX;
            // false (삭제를 하지 않겠다) 인 경우 바로 return 시켜준다.
            if(!window.confirm(_list.title + "의 데이터를 삭제하겠습니까?")) {
              return;
            }

            let listArr = Array.from(this.state.lists);
            let remove = listArr.splice(_listNowIDX, 1);
            console.log(remove);
            console.log(listArr);

            this.setState({
              mode: 'welcome',
              modeEve: 'delete',
              lists: listArr
            });
            return;
          }

          this.setState({
            mode: nMode,
            modeEve: nMode
          });
        }}
        ></Controll>
        {_article}
      </div>
    );
  }
}

export default App;
