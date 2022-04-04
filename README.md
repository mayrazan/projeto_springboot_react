## List Heroes

https://heroes-api-unoesc.herokuapp.com/api/heroes

## Find hero by id

https://heroes-api-unoesc.herokuapp.com/api/hero/{id}

## List heroes by type

- Type = MARVEL or DC

https://heroes-api-unoesc.herokuapp.com/api/hero-type/{type}

## Create a hero

Body

```json
{
  "name": "Captain America",
  "heroType": "MARVEL",
  "profilePicture": null
}
```

https://heroes-api-unoesc.herokuapp.com/api/hero/save

## Delete Hero

https://heroes-api-unoesc.herokuapp.com/api/hero/{id}/delete

## Update Hero

https://heroes-api-unoesc.herokuapp.com/api/hero/{id}/update

Body

```json
{
  "name": "Captain America",
  "heroType": "MARVEL",
  "profilePicture": null
}
```
