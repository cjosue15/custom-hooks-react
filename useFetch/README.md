# useCounter Hook

Ejejmplo de uso:

```
    const url = 'endpoint api';
    const { data: null, loading: true, error: null } = useFetch(url)
```

Usa el useEffect para validar si el componente esta montado o no para seguir haciendo la peticion asi como una validacion de las dependencias para que solo llame la primera vez que se pinta el componente.
