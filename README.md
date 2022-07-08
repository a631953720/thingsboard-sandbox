# Quick access
- [How about this project](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#how-about-this-project)
- [How to use](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#how-to-use)
- [API](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#api----post-httphostportdevice)
- [Project config -- config.json](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#project-config----configjson)
- [Create a webhook with thingsboard](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#create-a-webhook-with-thingsboard)
- [Run the demo code to observe how the service parse data](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#run-the-demo-code-to-observe-how-the-service-parse-data)


# thingsboard-sendbox
this is a simple service that can listen the request and response result

# This project development ENV
- node 16.13.0

# How about this project
1. create a simple service
2. can recieve a data input and parse data by the header given
3. can dynamic add, delete and change data parse rule by the json file
4. can use the thingsboard `API Calls rule node` to create a webhook to handle data
5. don't have other library

# How to use
## 1. Set json config (you can use this config for test)
```json
{
  "server": {
    "port": 8000,
    "dev_host": "127.0.0.1",
    "product_host": "0.0.0.0",
    "debug": true,
    "production": false
  },
  "device": {
    "device_type_A": {
      "get_cpu_loading": {
        "path": "CPU.loading"
      },
      "get_mem_loading": {
        "path": "MEM.loading"
      },
      "get_two": {
        "path": "Value.one.two"
      },
      "get_deep_value": {
        "path": "Value.one.two.three"
      }
    }
  }
}
```
## 2. Start service
```
npm run start
```

## 3. Listen the API request
This service will listen at `POST http://host:port/device`

## 4. Test the API can parse data
### postman
you can use the postman to check this service API is work: 
[thingsboard sendbox public postman](https://www.postman.com/ipa-innodisk/workspace/personal-workspace/request/8187701-085dbc53-3286-4f26-b57c-77fdb74acf00?ctx=code)
### cURL
```bash
curl --location --request POST 'http://127.0.0.1:8000/device' \
--header 'datapath: MEM.loading' \
--header 'devicetype: device_type_A' \
--header 'Content-Type: application/json' \
--data-raw '{
    "MEM": {
        "loading": 77
    }
}'
```

# API -- `POST http://host:port/device`

## Required header
- `datapath`
  - can tell the service how to parse data
  - please use `,` to split if you want to parse data deeper

- `devicetype`
  - can tell the service current data is send by some device type

## body
- any data (json format) send by device or others

# Project config -- `config.json`

## sample config as follow
```json
{
  "server": {
    "port": 8000,
    "dev_host": "127.0.0.1",
    "product_host": "0.0.0.0",
    "debug": true,
    "production": false
  },
  "device": {
    "device_type_A": {
      "get_cpu_loading": {
        "path": "CPU.loading"
      }
    },
    "device_type_B": {
      "get_mem_loading": {
        "path": "MEM.loading"
      }
    }
  }
}
```
## config -- `server`
- port 
  - server port
- dev_host
  - server listen host during dev mode
- product_host
  - server listen host during production mode
- debug
  - can print some debug log
- production
  - if this attribute is `true`, the service will listen the `product_host`
  - otherwise the service listen the `dev_host`

## config -- `device`
### layer 1 -- `device type` (in this sample at `device_type_A & device_type_B`)
- you can set your device type name
- this config will tell this service will receive which device type data

### layer 2 -- `function name` (in this sample at `get_cpu_loading & get_mem_loading`)
- you can set the function name
- the service don't care the name of function

### layer 3 -- `data path`
- you can use it to tell the service how to get some value
  - assump there is a data like as follow
    ```json
      {
        "data": {
          "one": 1
        }
      }
    ```
  - if you want to get the "one" value in this structure, you can set the `path` to `data.one`
  - the `,` can tell the service how path to query the data


# Create a webhook with thingsboard
## 1. create rule node as follow (in Root Rule Chain)
![image](https://user-images.githubusercontent.com/51738970/178023305-8a129eaf-f20a-4189-b37e-31f51a0248d8.png)

## 2. set the rest api call config (make sure that the network can connection with thingsboard!!!)

There are two header params at bottom are `datapath` and `devicetype`

The `datapath` can tell the service how to get the data. (data format please reference **API** chapter)

Another `devicetype` can tell the service current data is send by some device type. (how this service use it please reference **config** chapter)

![image](https://user-images.githubusercontent.com/51738970/178024316-346dcf08-52b1-4bc5-909f-97d026b22d99.png)

# Run the demo code to observe how the service parse data
- there are some files in `demo` folder
- the demo folder has isolated environment to run the core process
- you can change the `demo/config.demo.json` and run `npm run demo` to observe how the service parse data

# How to Deploy (Linux & Docker)

## 1. Set `config.json`
```js
  "server": {
    "port": 8000,
    "dev_host": "127.0.0.1",
    "product_host": "0.0.0.0",
    "debug": true,
    "production": true // if true, the service will listen `product_host`
  },
  // other setting...
```

## 2. Deploy 
### a. npm script
```
sudo npm run project-deploy
```
### b. Deploy by command line
```
cd release
sudo ./build.sh
sudo ./deploy.sh
```

## 3. check container is running
```
sudo docker ps | grep thingsboard-sendbox
```
you can see the container is runninng like as follow.
![image](https://user-images.githubusercontent.com/51738970/178057363-1351be0d-16a9-460a-a8dd-57ab86c0653b.png)

## 4. API test
you can reference [Test the API can parse data](https://github.com/a631953720/thingsboard-sendbox/blob/main/README.md#4-test-the-api-can-parse-data)
