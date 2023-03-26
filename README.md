# JavaScript TDD (With Jest)

https://indigo-pony-375.notion.site/Javascript-Jest-87d01d648a3b4535a7e57b60ccca0308

<aside>
💡 테스트의 정의와 유닛 테스트, 좋은 테스트 원칙과 TDD 실전을 기록한 내용입니다.
- [*Jest Manual](https://jestjs.io/docs/getting-started)
- [실습 코드](https://github.com/minuet1215/jest_unittest)*

</aside>

# What is TEST?

## Testing

프로그래밍에서 Test란 제품(함수, 특정 기능, UI, 성능, API 스펙 등)이 예상하는 대로(원하는 대로) 동작 하는지 확인하고 검증하는 단계이다. 테스트는 플랫폼, 환경, 목표에 따라 다양한 테스팅 방법이 존재한다.

주로 테스트 코드를 통해 작성되며, 테스팅 하고자 하는 목적에 따라 다양한 라이브러리, 프레임워크를 활용할 수 있다.

### 테스트를 하는 이유와 장점

- 기능이 정상적으로 동작하는지 확인할 수 있다
- 요구 사항에 대한 이해도를 높일 수 있다.
- 이슈에 대한 예측이 가능하다
- 버그를 빠르게 발견할 수 있다.
- 리팩토링이 쉬워진다.
- 유지보수가 쉬워진다.
- 코드의 품질 향상을 기대할 수 있다.
- 코드간 의존성을 낮춘다. (decoupling)
- 테스트 코드를 통해 좋은 문서화가 가능하다.
- 개발 시간을 절약할 수 있는 장점이 있다.

### Test Pyramid🌟

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/267bad71-6911-41e9-b560-840ee8254d68/Untitled.png)

- Unit Test (단위 테스트)
    - 함수, 모듈, 클래스 등 딱 하나의 단위를 테스트
- Integration Test (통합 테스트)
    - 하나의 단위가 아닌 여러 가지 단위를 묶었을 때 이들이 상호작용을 잘하는 지 테스트하는 것이다.
    - 모듈들, 클래스들 등
- E2E Test (UI 테스트, 사용자 테스트)
    - 실제 사용자의 사용 플로우를 테스트 하는 것을 말한다.
    

***비용***

`(cheap)` Unit Test → Integration Test → E2E Test `(expensive)`

***속도***

`(fast)` Unit Test → Integration Test → E2E Test `(slow)`

비용과 속도적인 측면으로 인해 Unit Test를 확실하게 (많이) 작성하는 편이며, 그 다음으로 Integration Test, E2E Test를 작성한다.

단위 테스트만 작성해야 하는 것은 아니며 통합 테스트, E2E 또한 중요하다. 그 외 상황과 목적에 따라 Contract Test, A/B, Stress 테스트 등이 있다.

## TDD란 무엇인가?

TDD(테스트 주도 개발, Test-driven development)는 개발(코드 작성)전 **테스트 코드를 먼저 작성**하여 개발해나가는 방식을 말한다.

특정 라이브러리나 프레임워크를 일컫는 게 아니며, 개발을 해나가는 방식을 말한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32e0cfc9-21a7-4734-a068-5fd721990815/Untitled.png)

(Re)Write test Test → Run Tests -(fail)→ Write only enough Code 

TDD는 오래 전부터 사용해오던 방식이다. TDD의 큰 장점으로는 테스트 코드를 작성하기 전 요구 사항 분석 및 이해를 더욱이 필요로 하여 꼼꼼한 설계가 진행된다.

TDD는 모든 요구 사항(목표)에 대해 점검 하고, 사용자 입장에서 코드를 작성하게 된다.

- 내부 구현보다는 인터페이스 위주로 작성되기에 코드의 퀄리티가 향상하게 된다.

이로 인해 시스템 전반적인 설계가 향상되며, 개발 집중력이 향상된다.

### TDD Flow

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/084f1638-b406-41be-8b2f-71b36e85b922/Untitled.png)

1. 기능 구현하기 이전에 테스트 코드를 작성한다.
2. 테스트가 실패하면 통과할 수 있는 정도로만 테스트 코드를 작성한다.
3. 다시 테스트 코드를 작성한다.
4. 1~3 과정을 반복하여 모든 테스트가 다 성공한다면,
5. 리팩토링을 시작한다. (오른쪽 Refactoring 과정)

### TDD는 모든 개발자들이 다 해야할까?

TDD는 강제할 수 있는 사항이 아니며, 개인이나 팀, 회사의 의견에 따라 선택할 수 있는 사항이다.

- TDD는 강제가 아니지만, test 코드는 중요하다.

(main branch에 merge되기 이전에 code + test가 `무조건` 함께 있어야 한다. -Allie-)

# Unit Test (With Jest)

### *Terminologies*

Test Runner: 테스트를 실행 후 결과 생성 (ex. Mocha)

Assertion: 테스트 조건, 비교를 통한 테스트 로직 (ex. Chai, expect.js, better-assert)

예전에는 Test Runner, Assertion 각각을 위한 라이브러리가 따로 존재했지만,`Jest`는 Test Runner와 Assertion 두 기능 모두 충족하여 제공한다.

### Jest

Jest is delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more.

***Jest 특징***

- Zero config: Jest aims to work out of the box, config free, on most JavaScript projects.
- snapshots: Make test which keep track of large objects with ease. Snapshots live either alongside your tests. or embedded inline
- isolated: Tests are parallelized by running them in their own processes to maximize performance.
- grate api: From it to expect - jest has the entire toolkit in one place. Well documented. well maintained. well good
- Fast And Safe
- Code Coverage
- Easy Mocking
- Great Exceptions
- Philosophy
- Docs and Talks

***Jest 설치***

`npm i jest @types/jest`

- TypeScript일 경우 추가적인 모듈 설치와 구성이 필요하다. (Error Handling 참고)

`jest --init` 명령어를 이용하여 config 파일을 생성할 수 있다.

# Mock

> 💡***Mocking***
Mocking(모의 객체)이란 주로 객체 지향 프로그래밍으로 개발한 프로그램을 테스트 할 경우 테스트를 수행할 모듈과 연결되는 외부의 다른 서비스나 모듈들을 실제 사용하는 모듈을 사용하지 않고 실제의 모듈을 "흉내"내는 "가짜" 모듈을 작성하여 테스트의 효용성을 높이는데 사용하는 객체이다. [위키백과](https://ko.wikipedia.org/wiki/%EB%AA%A8%EC%9D%98_%EA%B0%9D%EC%B2%B4)
> 
- What is Mocking? (영어 원문)
    
    In testing, mocking allows you to simulate dependencies that are outside of the scope of the code you are testing. These simulated dependencies are known as "mocks." A mock is an imitation of some external system, like a web service, database, or class instance. Its behavior is defined in a way that lets you control how it works and what it returns.
    
    For example, when testing a function that interacts with a database, we can create a mock database object which will return the expected output data instead of actually connecting to the physical database. This speeds up testing and makes tests more deterministic (i.e., they always produce the same result).
    
    Mocking involves creating fake objects that mimic the behavior of real objects. This technique is useful when you have dependencies in your code that are difficult to test, such as network connections or databases.
    
    When using mocks, you can define the desired behavior for each method in the mock object, so that when the tested function calls those methods, it does not interact with the real object but rather with the mock object providing expected behavior.
    
    Jest provides mocking functionality through jest.mock() and other related functions, allowing you to replace certain parts of your code with mock instances, and assert on their usage in your tests.
    

테스트에서 mocking을 사용하면 테스트 중인 코드의 범위를 벗어나는 종속성을 시뮬레이션할 수 있다.
이러한 시뮬레이션된 종속성을 "Mock"이라고 한다. Mock은 웹 서비스, 데이터베이스 또는 클래스 인스턴스와 같은 일부 외부 시스템의 모방(imitation)입니다. 동작은 작동 방식과 반환 값을 제어(control)할 수 있는 방식으로 정의된다.

예를 들어, 데이터베이스와 상호 작용하는 함수를 테스트할 때 실제 데이터베이스에 연결하는 대신 예상 출력 데이터를 반환하는 모의 데이터베이스 개체를 만들 수 있습니다. 이는 테스트 속도를 높이고 테스트를 보다 결정적으로 만든다(즉, 항상 동일한 결과를 생성한다).

mocking을 사용할 때 모의실험 객체에서 각 방법에 대해 원하는 동작을 정의할 수 있으므로, 테스트된 함수가 해당 메소드를 호출할 때 실제 객체와 상호작용하지 않고 기대되는 동작을 제공하는 모의실험 객체와 상호작용한다.

Mocking은 실제 물체의 행동을 모방한 가짜 물체를 만드는 것을 포함한다. 이 기술은 네트워크 연결 또는 데이터베이스와 같이 테스트하기 어려운 종속성이 코드에 있을 때 유용합니다. 

Jest는 jest.mock() 및 기타 관련 기능을 통해 모킹 기능을 제공하며, 이를 통해 코드의 특정 부분을 모의 인스턴스로 대체하고 테스트에서 사용할 수 있다.

### ⚠️ Warning!

jest에서 제공하는 mock을 사용하는 무분별하게 사용하는 것은 지양해야 한다! why?

### Mock을 clear하는 두 가지 방식

1. jest config 파일에서 다음과 같은 옵션을 추가한다. clearMocks: true
2. 테스트 코드의 beforeEach 등에 목을 직접 클리어하는 코드를 추가한다.
    
    ```jsx
    // example
    beforeEach(() => {
      myService = new MyService();
    	fetchItems.mockClear();
    	ProductClient.mockClear();
    });
    ```
    

### 읽어야할 자료

[Mock Functions · Jest](https://jestjs.io/docs/mock-functions)

[[JEST] 📚 모킹 Mocking 정리 - jest.fn / jest.mock /jest.spyOn](https://inpa.tistory.com/entry/JEST-📚-모킹-mocking-jestfn-jestspyOn)

# Stub

스텁(Stub)은 소프트웨어 개발에서 사용되는 단위 테스트에서 일부 구성 요소의 동작을 대신하는 프로그래밍 방법이다. 함수나 메서드를 대체하거나 데이터를 반환한다. 

스텁을 사용하여 모듈, 객체 또는 함수와 같은 의존성이 있는 컴포넌트에 대한 테스트를 단순화할 수 있다. 
스텁 목적은 테스트 케이스에서 특정 메서드가 예상한 대로 작동하는지 확인하는 것이다. 이를 통해 코드 범위 내에서 오류를 추적하고 실행 중인 시스템의 동작을 예측할 수 있다.

### Mock 방식과의 차이점

- 영어 원문
    
    Both stubs and mocks are testing doubles used in unit tests to simulate the behavior of external components or dependencies. However, they differ in their implementation and usage.
    
    A stub is a simplified version of a software component that performs predetermined actions in response to specific inputs. It provides fixed responses to method calls and eliminates the need for a real object during testing. A stub has pre-programmed responses that define the output of method calls or actions based on input parameters.
    
    On the other hand, a mock is a test double that verifies how the system under test behaves in various conditions by controlling/faking the real object's functions. It acts as a substitute for the original object and replaces it during testing. It records what happens when methods/functions are called and can verify that objects have been used correctly during the tests. Mocks allow developers to create and control behavior that does not yet exist in the system, making them helpful in assisting with TDD.
    
    So, the primary difference between them is that while stubs provide predetermined results to methods without verifying the correctness of the output, mocks ensure that expected outputs are produced while also verifying interactions with external code.
    

스텁과 mocking은 모두 외부 구성 요소 또는 종속성의 동작을 시뮬레이션하기 위해 단위 테스트에 사용되는 이중 테스트이다. 그러나 구현 및 사용법이 다르다.

스텁은 특정 입력에 응답하여 미리 결정된 작업을 수행하는 소프트웨어 구성 요소의 단순화된 버전입니다. 메서드 호출에 고정된 응답을 제공하고 테스트 중에 실제 개체가 필요하지 않습니다. 스텁에는 입력 매개변수를 기반으로 메소드 호출 또는 조치의 출력을 정의하는 사전 프로그래밍된 응답이 있다.

반면에, mocking은 실제 개체의 기능을 제어/위장하여 테스트 중인 시스템이 다양한 조건에서 어떻게 작동하는지 확인하는 테스트다. 원래 개체를 대체하는 역할을 하며 테스트 중에 교체한다. 메서드/함수가 호출될 때 발생하는 일을 기록하고 테스트 중에 개체가 올바르게 사용되었는지 확인할 수 있다. mocking은 개발자가 시스템에 아직 존재하지 않는 동작을 생성하고 제어할 수 있도록 하여 TDD를 지원하는 데 도움이 된다.

따라서, 이들 간의 **주요 차이점**은 스텁이 출력의 정확성을 확인하지 않고 메서드에 미리 결정된 결과를 제공하는 반면, mocking은 외부 코드와의 상호 작용도 확인하면서 예상 출력이 생성되도록 보장한다.

# 테스트 구조와 원칙

### 테스트 코드 작성 유의사항

1. 한번 작성된 테스트 코드는 영원히 유지보수 해야 한다.
2. 지나치게 내부 구현 사항을 테스트하는 것을 지양해야 한다.
    - 사용자 입장의 api를 테스트하는 것을 목표로 한다.
3. 재사용성을 높여서 테스트 코드를 작성해야 한다.
4. 테스트 코드와 배포용 코드는 철저히 분리해야 한다.
    - 테스트 코드와 관련된 데이터 파일, mock, stub 등
5. 테스트 코드를 통한 문서화가 되야 한다.

---

### 테스트 코드의 구조

주로 Given-When-Then 구조를 많이 언급한다. 주의사항으로는 다음과 같다.

- Given: 준비 과정을 재사용 → 유틸리티 함수로 정의하는 것이 좋다.
- When: 의도적으로 실패하는 코드 작성이 필요하다.
    - 특히, 버그를 수정할 때 실패 하는 코드로 검증을 한다.
- Then: 가장 마지막에 작성한다.

---

### 좋은 테스트의 원칙

***`FIRST 원칙`***

- Fast: 느린 것에 대한 의존성 낮추기
    - 파일, 데이터베이스, 네트워크 등
    - Mock이나 Stub을 사용

- Isolated: 최소한의 유닛으로 검증하기
    - 독립적이고, 집중적으로 유지
    - 하나의 테스트에서 너무 많은 것을 동시에 테스트하지 않는다.

- Repeatable: 실행할 때마다 동일한 결과를 유지
    - 다른 테스트 코드에 의존하거나, 네트워크 등 외부 환경에 의존적인 경우 실행할 때마다 동일한 결과를 가져오기 어렵다.
    - 그러므로, 환경에 영향을 받지 않도록 작성해야 한다.

- Self-Validating: 스스로 결과를 검증하기
    - 자동화를 통한 검증 단계 (CI/CD)

- Timely: 시기적절한 테스트 코드를 작성한다.
    - 사용자에게 배포되기 이전에 테스트 코드를 작성한다.

# 읽어봐야 할 것

### 런던파, 고전파?

> 런던파는 목 추종자(mockist)라고도 불린다.
> 

고전파와 런던파는  단위 테스트의 두 가지 방식을 나타낸다. 가장 큰 차이점으로는 테스트를 할 때 격리를 바라보는 관점이다.

[단위 테스트란 무엇일까? 런던파와 고전파의 차이점 🆚](https://kukim.tistory.com/107)

The terms "classical school" and "London school" refer to different approaches to unit testing.

The classical school, also known as the "state-based" approach, takes a more holistic view of testing. Rather than isolating units of code with mocks, this approach seeks to test units in the same state and context in which they will be used in the system. Tests are designed to exercise the behavior of the code as it is integrated into the larger system. This approach can be more intuitive and results in simpler tests, but may be more difficult to set up and execute for complex systems.

The London school, also known as the "mockist" approach, emphasizes the use of mock objects to isolate units of code for testing. Mock objects are used to simulate the behavior of objects or dependencies that a unit of code interacts with. By using mocks, the classical approach seeks to test units of code in isolation from the rest of the system. This allows tests to be reliable and repeatable, but may lead to tests that are overly complex and hard to maintain.

### ***코드 예시***

### Classic Test Example

Suppose, we have a simple function `sum` which adds two numbers, and we want to write a classic test case for this function, which includes setting up the environment, calling the function, and then verifying the output. Here's how we can do that:

```jsx
function sum(a, b) {
  return a + b;
}

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('adds 7 + (-2) to equal 5', () => {
    const result = sum(7, -2);
    expect(result).toBe(5);
  });
});
```

In this example, we have defined a function `sum` that accepts two arguments and returns their sum. We have also written two test cases to verify the output of this function under different input conditions. In each test case, we are calling the `sum` function with some parameters and verifying the output using the `expect` function.

### London Jest Example

Now, let's see an example of the London Jest approach. Suppose we have a `User` class that provides some functionality related to users, such as adding a new user, getting user details, and deleting a user. Here's how we can test this class using the London Jest approach:

```jsx
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = +new Date();
    this.deleted = false;
  }

  delete() {
    this.deleted = true;
  }
}

describe('User', () => {
  describe('delete', () => {
    test('sets deleted flag to true', () => {
      const user = new User('John Doe', 'johndoe@example.com');
      user.delete();
      expect(user.deleted).toBe(true);
    });
  });

  describe('constructor', () => {
    test('creates a new user object', () => {
      const user = new User('Jane Doe', 'janedoe@example.com');
      expect(user).toBeDefined();
      expect(user.name).toBe('Jane Doe');
      expect(user.email).toBe('janedoe@example.com');
      expect(user.id).toBeDefined();
      expect(typeof user.id).toBe('number');
      expect(user.deleted).toBe(false);
    });
  });
});
```

In this example, we have defined a `User` class that has a `delete` method to mark a user as deleted. We have also defined a constructor for the class to set the initial user properties.

In the test cases, we call the methods of the `User` class and verify their behavior. The key difference between the classic and London approach here is that we are not verifying the output of the method calls directly. Instead, we are checking whether the expected state changes have occurred or not.

For example, in the first test case, we create a new `User` object, call its `delete` method, and then check if the `deleted` flag has been set to `true`. Similarly, in the second test case, we create a new `User` object explicitly, and then we use various `expect` functions to check if all the properties have been set accordingly.

# Error Handling

### @types/jest를 설치해도 any로 나오는 경우?

프로젝트 root 폴더에 jsconfig.json 파일을 생성하고 아래외 같이 작성한다.

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

---

### TypeScript 환경에서 Jest 이용 시 module을 제대로 임포트 하지 못하는 경우

test 파일에서 import 구문을 사용할 경우 다음과 같은 에러를 마주친다.

`SyntaxError: Cannot use import statement outside a module`

이러한 문제가 발생하는 가장 큰 이유는 Jest가 기본적으로 TypeScript 모듈을 지원하지 않는 Node 위에서 실행되기 때문에, `ts-jest`라는 별도의 모듈 설치와 `config` 작성이 필요하다.

TypeScript 환경에서 Jest를 구성하기 위해서는 Jest가 TypeScript 모듈 및 유형을 적절하게 처리할 수 있도록 `**ts-jest**` 모듈 설치와 추가 구성이 필요하다.

**`ts-jest`는** Jest가 TypeScript 모듈 및 유형을 적절하게 처리할 수 있게 해주는 Jest 전처리기다. JavaScript 모듈과 함께 작동할 수 있으며, 또한 **`ts-jest`는** TypeScript 진단 및 커버리지 보고서 지원과 같은 몇 가지 추가 기능을 제공한다.

`ts-jest`는 다음 명령어로 설치한다.

```bash
npm install --save-dev ts-jest
```

그리고, `ts-jest` 전처리기를 사용하기 위해 `jest.config.js` 파일이나 `package.json` 컨픽을 수정한다. 여기서는 `jest.config.js`를 수정한다.

- 만약 `jest.config.js` 파일이 없다면, `npx ts-jest config:init` 를 입력한다.

```json
{
  "preset": "ts-jest",
  "testEnvironment": "node",
  "moduleFileExtensions": ["ts", "js"]
}
```

- **`preset`**: Jest to use the **`ts-jest`** preprocessor.
- **`testEnvironment`:** that Jest should run tests in a Node.js environment.
    - 이 옵션은 따로 주지 않아도 돌아가는 듯 하다?
- **`moduleFileExtensions`:** Jest to recognize TypeScript and JavaScript files with the **`.ts`** and **`.js`** extensions, respectively.

Ref.
