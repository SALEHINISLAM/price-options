import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const LineCharts = () => {

    const subjectMarks=[
        {
        "student": "Alice",
        "math_marks": 85,
        "physics_marks": 75,
        "chemistry_marks": 80
        },
        {
        "student": "Bob",
        "math_marks": 72,
        "physics_marks": 81,
        "chemistry_marks": 68
        },
        {
        "student": "Charlie",
        "math_marks": 91,
        "physics_marks": 87,
        "chemistry_marks": 94
        },
        {
        "student": "David",
        "math_marks": 68,
        "physics_marks": 62,
        "chemistry_marks": 71
        },
        {
        "student": "Emily",
        "math_marks": 95,
        "physics_marks": 90,
        "chemistry_marks": 98
        },
        {
        "student": "Fiona",
        "math_marks": 78,
        "physics_marks": 84,
        "chemistry_marks": 82
        },
        {
        "student": "George",
        "math_marks": 83,
        "physics_marks": 79,
        "chemistry_marks": 75
        },
        {
        "student": "Henry",
        "math_marks": 99,
        "physics_marks": 93,
        "chemistry_marks": 100
        },
        {
        "student": "Isabella",
        "math_marks": 80,
        "physics_marks": 77,
        "chemistry_marks": 85
        },
        {
        "student": "Jack",
        "math_marks": 70,
        "physics_marks": 65,
        "chemistry_marks": 69
        }
        ]
    return (
        <div>
            <LineChart width={1500} height={400} data={subjectMarks}>
                {/* width 500px */}
                <Line dataKey="math_marks" stroke='red'>
                </Line>
                <Line dataKey="physics_marks" stroke='yellow'>
                </Line>
                <Line dataKey="chemistry_marks" stroke='orange'>
                </Line>
                <XAxis dataKey="student" />
                <YAxis />
            </LineChart>
        </div>
    );
};

LineCharts.propTypes = {
    
};

export default LineCharts;