import React from "react";

export default function DockerBlog() {
  const ImageBlock = ({ name }) => (
    <img
      src={`/Docker-Blog/${name}`}
      alt={name}
      className="my-6 rounded-xl shadow-lg border border-gray-700"
    />
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">
        🐳 Only Docker Blog You Need To Start Working With It
      </h1>

      <p className="mb-4">
        When you start with Docker it can feel a bit complex and a lot to take at a time such as Containers, Images etc, but by the end of this blog you will be able to start implementing docker in your daily or professional projects, and that is how you will learn Docker you will have to get your hands on to it to understand Docker to its best.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🔍 What Is Docker?</h2>
      <p className="mb-4">
        To understand what is docker lets take an example there is a car which you want to transport from one country to another, so will you export it parts by part like engine, tyres , chassis or you will book a container and export the car in full condition, ofcourse the second approach, that is exactly what docker does it helps you share your project as a whole application at once.
      </p>
      <p className="mb-4">
        For those who have used github or are aware of it you share your application code than anyone who wants to access your application can clone your repository run few commands and start the application on the other hand Docker helps you share the entire application at once and can start the application in just one command
      </p>
      <p className="mb-4">
        So Docker is an open source platform which lets you package your code , dependencies , libraries into a single body called container which can run on any system either local machine or cloud.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">📦 Container Vs Images</h2>
      <p className="mb-4">
        Images are the ready to go applications which you can find plenty on docker sduch as nginx mongo node and much more
      </p>
      <p className="mb-4">
        container is the running instance of the image it is the environment in which you run those images 
      </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">🌐 What is Docker Hub</h2>
      <p className="mb-4">
        Docker hub is a open source platform where many companies and developers have shered the images of there applications
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">💻 Download Docker</h2>
      <p className="mb-4">
        As I mentioned above to understand Docker  you need t get your hands on it so lets install docker and start using it to understand it better.
      </p>
      <p className="mb-4">
        You can got to <a href="https://docs.docker.com/get-started/get-docker/" target="_blank" className="text-blue-500 underline">https://docs.docker.com/get-started/get-docker/</a> and Download docker desktop for your  os either windows, mac or linux.
      </p>
      <p className="mb-4">
        If you are on windows make sure you have wsl installed so you can use docker in terminal,
      </p>
      <p className="mb-4">
        For installing WSL just run wsl –install on your terminal and you will be able to access window subsystem for linux
      </p>

      <p className="mb-4">
        Once you are done with the installation of docker now we can start using it open your terminal or power shell if on windows run wsl
      </p>
    

  
       <h2 className="text-2xl font-semibold mt-10 mb-4">🛠️ Now let's go through some basic Docker commands</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker images</code> - Used to check all the images that are available on your local device</li>
      </ul>
      <p className="mb-4">Now when you run <code className="bg-gray-200 px-2 py-1 rounded">docker images</code> you can see all the images available on your local OS.</p>
      <ImageBlock name="image1.png" />

      <p className="mb-4">
        As we can see there are no current images, so what we can do is pull images from Docker Hub.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <code className="bg-gray-200 px-2 py-1 rounded">docker pull imageName</code> - Used to pull an image from Docker Hub. You can check out all the versions on Docker Hub and pull a specific one if required. By default, it pulls the latest version.
        </li>
      </ul>

      <ImageBlock name="image2.png" />
      <ImageBlock name="image3.png" />

      <p className="mb-4">
        Here you might see many layers being pulled — you can think of them as different file components. If a specific file already exists locally, Docker will skip pulling it again.
      </p>

      <p className="mb-4">
        You can also check out all available versions on Docker Hub for a specific application.
      </p>
      <ImageBlock name="image4.png" />

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker run imageName</code> - Used to pull and start the image from Docker Hub</li>
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker stop</code> - Stops a running Docker container</li>
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker start</code> - Starts a stopped container</li>
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker ps</code> - Shows running containers</li>
        <li><code className="bg-gray-200 px-2 py-1 rounded">docker ps -a</code> - Shows all containers including stopped ones</li>
      </ul>

      <ImageBlock name="image5.png" />
      <ImageBlock name="image6.png" />

      <p className="mb-4">Here in <strong>PORTS</strong>, <code>6379</code> is the port where Redis is running inside the container.</p>

      <p className="mb-4">
        <code className="bg-gray-200 px-2 py-1 rounded">docker logs</code> — You can check logs of an application using either its container name or ID.
      </p>

      <ImageBlock name="image7.png" />
      <ImageBlock name="image8.png" />


      <h2 className="text-2xl font-semibold mt-10 mb-4">🖥 Docker Vs Virtual Machine</h2>

      <p className="mb-4">
        Many of you might be confused, thinking — "Aren’t Docker and Virtual Machines both doing virtualization?"
      </p>

      <ImageBlock name="DokcerVsVM.png" />

      <p className="mb-4">🐳 <strong>Docker</strong><br/>
        Docker performs virtualization at the application level. It runs applications in isolated containers that share the host machine’s OS kernel. This makes Docker lightweight, fast, and efficient.
      </p>

      <p className="mb-4">🖥 <strong>Virtual Machine (VM)</strong><br/>
        A Virtual Machine virtualizes at the hardware level. It simulates an entire machine, including its own operating system and kernel. This makes VMs heavier and slower to start, but also more isolated and versatile — great when you need to run different OS types.
      </p>

      <p className="mb-4">🧠 In Short:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Docker: Shares the host OS kernel → Lightweight & fast</li>
        <li>Virtual Machine: Own OS kernel → Fully isolated but heavier</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">🔁 Docker Workflow</h2>
      <ImageBlock name="DockerWorkflow.png" />

     ...

      <h2 className="text-2xl font-semibold mt-10 mb-4">🧪 Hands on Project</h2>
      <p className="mb-4">Lets start by creating account on docker hub</p>
      <p className="mb-4">
        <a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          https://hub.docker.com/
        </a>
      </p>
      <p className="mb-4">
        now once you have your account ready now we can push images to your docker hub
      </p>
      <p className="mb-4">
        So if you have a project which has both frontend and backend code it is suggested to push them separately so that you can run them both inside container
      </p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`My-Project
  ├── Frontend
  └── Backend`}
      </pre>

      <p className="mb-4">
        Now for building up your entire image you will need to prepare a docker file which will contain of all the rules which should be followed while running the image consider it as a blueprint required to prepare the image of your application
      </p>

      <p className="mb-4">A basic Docker file for a backend app would look like:</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`FROM node:18    //node 18 is an already available image and we are telling docker that our app is built on that image

WORKDIR /app

COPY package*.json ./     //copies all the dependencies
RUN npm install           //and installs them

COPY . .          // copies all the files in the folder

EXPOSE 5000    // the port on which the app should run

CMD ["npm", "start"]         // this are the commands which will run first when the container is started`}
      </pre>

      <p className="mb-4">And same for frontend would look like:</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine   // here we are going to use nginx server cause frontend has some basic html css which will be served faster with the use of nginx instead of nodejs server

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
      </pre>

      <p className="mb-4">
        Now we can run:
      </p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
<code>docker build -t my-app .</code>
      </pre>
      <p className="mb-4">Here <code>build</code> command is used to package up the entire files in the current folder into a image. And we named it <code>my-app</code> using <code>-t</code></p>
      <ImageBlock name="image9.png" />

      <p className="mb-4">Now once you are done building we can still change the name of the image using tag command</p>
      <ImageBlock name="image10.png" />

      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
<code>docker tag my-app yash3064/my-app-frontend</code>
      </pre>

      <p className="mb-4">Now same for backend folder</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
<code>docker build -t my-app-backend .</code>
      </pre>

      <p className="mb-4">Now you can use <code>docker login</code> command and login to your docker hub using terminal</p>
      <p className="mb-4">Then use:</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
<code>docker push yash3064/my-app-frontend</code>
      </pre>
      <ImageBlock name="image11.png" />

      <h2 className="text-2xl font-semibold mt-10 mb-4">📦 Docker Compose</h2>
      <p className="mb-4">Docker compose is a tool that will help you run multi-container images through just one file.</p>
      <p className="mb-4">The file should be named <code>docker-compose.yaml</code>.</p>
      <p className="mb-4">To understand YAML files, I’ll be uploading a separate blog for that — so stay tuned! For now, you can understand it as a human-readable way of writing configuration files.</p>

      <p className="mb-4">Now you can manually run each container in your project like this:</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`docker run -d --name mongo -p 27017:27017 mongo`}
      </pre>
      <p className="mb-4">Here we are mapping port 27017 from the container (mongo) to the local system using the <code>-p</code> tag.</p>

      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`docker run -d \
  --name frontend \
  -p 5173:5173 \
  my-frontend`}
      </pre>

      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`docker run -d \
  --name backend \
  -p 5000:5000 \
  --env MONGO_URL=mongodb://Databse_Name/ \
  my-backend`}
      </pre>

      <p className="mb-4">But the same can be done using a single <code>docker-compose.yaml</code> file like this:</p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`services:
  mongo:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"

  backend:
    image: yash3064/my-app-backend
    container_name: backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/EnterpreneursElevate
      - JWT_SECRET=22BAC9D251E5D788EACB14E94C662
      - JWT_LIFETIME=30d
    depends_on:
      - mongo

  frontend:
    image: yash3064/my-app-frontend
    container_name: frontend
    ports:
      - "3000:80"
    depends_on:
      - backend`}
      </pre>

      <p className="mb-4">
        One of the mistakes which I also make — and can happen to you guys as well — is if you're using a <code>.env</code> file to set up your Mongo configurations for local testing, it may overwrite what you’ve written in this Docker file. So either delete it or make sure they have the same configurations.
      </p>

      <p className="mb-4">
        Now you can run:
      </p>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
<code>docker-compose up --build</code>
      </pre>
      <p className="mb-4">
        And it will start all three containers with the configurations all together. You can access:
        <br />Frontend at port <code>5173</code><br />Backend at port <code>5000</code>
      </p>

      <p className="mb-4">
        So now if I do <code>docker compose down</code> and start the application again — all the data we added will be lost.
      </p>

      <ImageBlock name="image12.png" />
      <ImageBlock name="image13.png" />
      <ImageBlock name="image14.png" />

      <p className="mb-4">
        So what is happening exactly? When we are running Mongo on a container, it is storing data locally in that container — and when we stop or remove the container, all the data it holds gets removed.
      </p>
      <p className="mb-4">
        So what is the solution to this? It’s <strong>Volumes</strong>!
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">💾 Docker Volumes</h2>
      <ImageBlock name="volumes.png" />

      <p className="mb-4">
        When we store data in a container, we can mount that data to our local system using <code>docker-compose</code>. So each time the container starts, it can refer to the data from the local directory.
      </p>

      <p className="mb-2">There are 3 types of Docker volumes:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Named Volumes:</strong>
          <pre className="bg-[#142d5c] text-white p-2 rounded overflow-auto">
{`volumes:
  - mongo-data:/data/db`}</pre>
          Docker manages this volume. Data lives outside the container (persistent).
        </li>
        <li><strong>Anonymous Volumes:</strong>
          <pre className="bg-[#142d5c] text-white p-2 rounded overflow-auto">
{`volumes:
  - /data/db`}</pre>
          No volume name before the colon — so Docker creates a random name. Still persistent, but harder to manage.
        </li>
        <li><strong>Bind Mounts:</strong>
          <pre className="bg-[#142d5c] text-white p-2 rounded overflow-auto">
{`volumes:
  - ./my-local-folder:/app/data`}</pre>
          <code>/app/data</code> inside the container maps to <code>./my-local-folder</code> on host.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">🧪 DEMO with Docker Volumes</h3>
      <pre className="bg-[#142d5c] text-white p-4 rounded mb-4 overflow-auto">
{`services:
  mongo:
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db  # <-- persistent volume for MongoDB

  backend:
    image: yash3064/my-app-backend
    container_name: backend
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/EnterpreneursElevate
      - JWT_SECRET=22BAC9D251E5D788EACB14E94C662
      - JWT_LIFETIME=30d
    depends_on:
      - mongo

  frontend:
    image: yash3064/my-app-frontend
    container_name: frontend
    ports:
      - "3000:80"
    depends_on:
      - backend

volumes:
  mongo-data:`}
      </pre>

      <p className="mb-4">
        Here we are referencing <code>/data/db</code> to store Mongo data into <code>mongo-data</code> volume on local disk. Now even if you do <code>docker compose down</code>, your data stays safe.
      </p>

      <h3 className="text-xl font-semibold mb-2">📂 Docker Volume Locations</h3>
      <ul className="list-disc pl-6">
        <li><strong>Windows:</strong> <code>C:\ProgramData\docker\volumes</code></li>
        <li><strong>Mac:</strong> <code>/var/lib/docker/volumes</code></li>
        <li><strong>Linux:</strong> <code>/var/lib/docker/volumes</code></li>
      </ul>

    </div>
  );
}
