const addGoalProgress = `INSERT INTO goals (user_id, start_date, end_date, drank_water_goal, is_stressed_goal, did_sleep_goal, is_tired_goal)
VALUES ([user_id], '[start_date]', '[end_date]', [drank_water_goal], [is_stressed_goal], [did_sleep_goal], [is_tired_goal]);`;

module.exports = { addGoalProgress };
