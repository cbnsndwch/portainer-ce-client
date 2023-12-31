# Portainer CE REST API

The Portainer CE REST API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at <https://documentation.portainer.io/api/api-examples/>.

You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).

## Authentication

Most of the API environments(endpoints) require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the `Authorization` header of each request with the `Bearer` authentication mechanism.

## Security

Each API endpoint has an associated access policy which is documented in the description of each. Different access policies are available:

- Public access
- Authenticated access
- Restricted access
- Administrator access

### Public access

No authentication is required to access the environments(endpoints) with this access policy.

### Authenticated access

Authentication is required to access the environments(endpoints) with this access policy.

### Restricted access

Authentication is required to access the environments(endpoints) with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.

### Administrator access

Authentication as well as an administrator role are required to access the environments (endpoints) with this access policy.

## Execute Docker requests

Portainer **DOES NOT** expose specific endpoints to manage your Docker resources (create a container, remove a volume, etc...). Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests `via` the Portainer HTTP API.

To do so, you can use the `/endpoints/{id}/docker` path prefix and append the Docker API endpoint path. This endpoint has a restricted access policy so you still need to be authenticated to be able to call it. Any query on this endpoint will be proxied to the Docker API of the associated Portainer environment. Requests and responses objects are the same as documented in the Docker API.

You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://documentation.portainer.io/api/api-examples/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Open Source Licenses

This project is based in part on the [portainer_api_with_docker_api] package, including some of the contents of this README.md file. `portainer_api_with_docker_api` is licensed under the MIT License.

[portainer_api_with_docker_api]: https://www.npmjs.com/package/portainer_api_with_docker_api
