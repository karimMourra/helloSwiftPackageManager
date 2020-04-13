import XCTest
@testable import helloSwiftPackageManager

final class helloSwiftPackageManagerTests: XCTestCase {
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
        XCTAssertEqual(helloSwiftPackageManager().text, "Hello, World!")
    }

    static var allTests = [
        ("testExample", testExample),
    ]
}
