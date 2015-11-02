let expect = chai.expect;

describe("Trip > Activity > Factory", () => {

    describe("individualActivity()", () => {

        it("should contain necessary keys", () => {
            let individualActivity: activity.IActivity = activity.Factory.individualActivity();
            expect(individualActivity).to.contain.keys("icon", "title", "duration");
        });

        it("should assign correct default values", () => {
            let individualActivity: activity.IActivity = activity.Factory.individualActivity();
            expect(individualActivity.icon).to.equal("./resources/icons/personal-activity.svg");
            expect(individualActivity.title).to.equal("");
            expect(individualActivity.duration.start).to.equal(null);
            expect(individualActivity.duration.end).to.equal(null);
        });

    });

});