import * as React from 'react';
import { Button, Layout, Menu } from 'antd';
import { ReadOutlined, FileOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Content, Sider } = Layout;

const ComponentView = styled.div`
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

type Component = {
  name: string;
  windowHeight: number;
  windowWidth: number;
};

const App = () => {
  const [selectComponent, setSelectComponent] = React.useState<string>('storyboard');
  const [data, setData] = React.useState<Component>();
  const [componentData, setComponentData] = React.useState<Component[]>([
    { name: 'Main View', windowHeight: 0, windowWidth: 0 },
    { name: 'Sub View', windowHeight: 0, windowWidth: 0 },
  ]);

  const onClickComponent = ({ key }: any) => {
    setData(componentData.filter((item) => item.name === key)[0]);
    setSelectComponent(key);
  };

  return (
    <Layout>
      <Layout
        className="site-layout"
        style={{
          marginRight: 250,
          height: '100vh',
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA4LTI4VDAwOjA5OjI2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA4LTI4VDAwOjA5OjI2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wOC0yOFQwMDowOToyNiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZDNlZWE5My1mOWJjLTMxNDEtOGMwYy0zNmI1MDJmYzRkNDIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNzJlZTM4OC0zYWY5LTVmNDAtYWE3OS1hYzczYWMyMDUwNTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphOGU2Y2VlOC05NDZlLTE1NDUtOWU5YS0zMzJjODgyYjRhMDYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphOGU2Y2VlOC05NDZlLTE1NDUtOWU5YS0zMzJjODgyYjRhMDYiIHN0RXZ0OndoZW49IjIwMjEtMDgtMjhUMDA6MDk6MjYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWQzZWVhOTMtZjliYy0zMTQxLThjMGMtMzZiNTAyZmM0ZDQyIiBzdEV2dDp3aGVuPSIyMDIxLTA4LTI4VDAwOjA5OjI2KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/HeZIwAAABhJREFUGJVj+A8FZ6CAYYAEYAyYxAAJAAD0J+WBWCfokQAAAABJRU5ErkJggg==')",
          backgroundSize: '16px',
        }}
      >
        <Content style={{ margin: 16 }}>
          {selectComponent !== 'storyboard' && (
            <ComponentView
              style={{
                height: data?.windowHeight === 0 ? '100%' : data?.windowHeight,
                width: data?.windowWidth === 0 ? '100%' : data?.windowWidth,
              }}
            >
              <p>{data?.name}</p>
            </ComponentView>
          )}
        </Content>
      </Layout>
      <Sider
        width={250}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          right: 0,
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Button
            style={{ width: 225, marginTop: 10, marginBottom: 10 }}
            type="dashed"
            icon={<EditOutlined />}
          >
            Edit Component List
          </Button>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectComponent]}
          onClick={onClickComponent}
        >
          <Menu.Item key="storyboard" icon={<ReadOutlined />}>
            StoryBoard
          </Menu.Item>
          {componentData.map((item) => (
            <Menu.Item key={item.name} icon={<FileOutlined />}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default App;
