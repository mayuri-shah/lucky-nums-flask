### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
A RESTful route is a route that provides mapping from HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route depends on the HTTP verb and the URL.

- What is a resource?
Resources are the basic building block of a RESTful service. Examples of a resource from an online book store application include a book, an order from a store, and a collection of users. Resources are addressable by URLs and HTTP methods can perform operations on resources.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
It returns jsonify data.

- What does idempotent mean? Which HTTP verbs are idempotent?
An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. Implemented correctly, the GET , HEAD , PUT , and DELETE methods are idempotent, but not the POST method. ... All safe methods are also idempotent.

- What is the difference between PUT and PATCH?
The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.

- What is one way encryption?
A one-way hash function is a cryptographic algorithm that turns an arbitrary-length input into a fixed-length binary value, and this transformation is one-way, that is, given a hash value it is statistically infeasible to re-create a document that would produce this value.

- What is the purpose of a `salt` when hashing a password?
Salting is a concept that typically pertains to password hashing. Essentially, it's a unique value that can be added to the end of the password to create a different hash value. This adds a layer of security to the hashing process, specifically against brute force attacks.

- What is the purpose of the Bcrypt module?
The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.

- Authentication and authorization might sound similar, but they are distinct security processes in the world of identity and access management (IAM). Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.