 type infoResponse={
seed:string,
results:number,
page:number,
version:string
}

type dobResponse={
date:string,
age:number
}

type idResponse={
name:string,
value:string|null
}

type locationResponse={
  city:string,
  coordinates:{
    latitude:string,
    longitude:string
  },
  country:string,
  postcode:number,
  state:string,
  street:{
    number:number,
    name:string
  },
  timezone:{
    offset:string,
    description:string
  }
}

type loginResponse={
  md5:string,
  password:string,
  salt:string,
  sha1:string,
  sha256:string,
  username:string,
  uuid:string
}
type nameResponse={
  first:string,
  last:string,
  title:string
}

type mediaDetailsResponse={
  large:string,
  medium:string,
  thumbnail:string
}

type registeredResponse={
  age:number,
  date:string,
}

export type userDetailsV1Response={
cell?:string,
dob?:dobResponse,
email:string,
gender?:string,
id?:idResponse,
location?:locationResponse,
login?:loginResponse,
name:nameResponse,
nat?:string,
phone?:string,
picture?:mediaDetailsResponse,
registered?:registeredResponse
}


export type FetchUserDetailsResponse = {
  info:infoResponse,
  results: userDetailsV1Response[]
  }

  export const FETCH_USER_DETAILS_API="https://randomuser.me/api"