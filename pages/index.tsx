import { useState } from 'react';
import Layout from '../components/Layout';

let temp = {
  text: [
    {
      label: 'TITLE',
      style: { color: '#212121' },
      className: 'col-start-3 row-start-2 h-full col-span-6',
    },
    {
      label: 'Super Ball',
      style: { color: '#212121' },
      className: 'col-start-4 row-start-6 h-full col-span-6',
    },
  ],

  img: [
    {
      image:
        'https://images.unsplash.com/photo-1612831818665-20956fccb5ee?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      style: {
        color: '#212121',
        backgroundColor: '#cccccc',
      },
      className: 'row-start-4 col-start-3 col-span-4',
    },
  ],
};

const IndexPage = () => {
  const [textState, setTextState] = useState(temp.text);
  const [imageState, setImageState] = useState(temp.img);

  const updateFieldChanged = (index: number) => (e: any) => {
    console.log('index: ' + index);
    console.log('property name: ' + e.target.name);
    let newArr = [...textState]; // copying the old datas array
    console.log(newArr);
    newArr[index].label = e.target.value; // replace e.target.value with whatever you want to change it to
    setTextState(newArr);
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example" footer={false}>
      {/* Left */}
      <div>
        <section>
          <div>
            <h1 className="text-2xl font-semibold">Application</h1>

            {/* Template */}
            <div
              className="grid grid-cols-12 grid-rows-6 w-full h-full bg-gray-100 border-2 mx-auto"
              style={{ width: 500, height: 500 }}
            >
              {textState.map((text, idx) => {
                return (
                  <div key={idx} className={text.className}>
                    <input
                      type="text"
                      className="grid place-items-start bg-transparent"
                      value={text.label}
                      name={text.label}
                      onChange={updateFieldChanged(idx)}
                      style={{ color: text.style.color }}
                    />
                  </div>
                );
              })}

              {imageState.map((img, idx) => (
                <div key={idx} className={img.className}>
                  <img
                    className="rounded-full"
                    src={img.image}
                    onClick={e => console.log(e.target)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
