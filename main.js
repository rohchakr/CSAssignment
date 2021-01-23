console.log(d3.version)

const url = 'https://clarisights-users.s3.eu-central-1.amazonaws.com/frontend-assignment/1000+items+table+response.json'

const rowsPerPage = 5
const rowsToLoad = 10
const svgViewPortHeight = 300
const svgViewPortWidth = 500
const gap = 10
const lineChartHeight = svgViewPortHeight/rowsPerPage - gap
const lineChartWidth = svgViewPortWidth/3 - gap
// d3.json(url, {referrerPolicy: 'no-referrer-when-downgrade'})
//     .then(response => drawViz(response.data))
//     .catch(error => console.log(error))
const data1 = "{\"groups\":{\"Campaign\":{\"metadata\":{\"name\":\"99733871-f7c5-4b52-9773-1ca69816fc03\"}}},\"trend\":[{\"day\":\"2020-06-01\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":178,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-02\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":166,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":21},{\"day\":\"2020-06-03\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":153,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":16},{\"day\":\"2020-06-04\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":162,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":5},{\"day\":\"2020-06-05\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":185,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":15},{\"day\":\"2020-06-06\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":192,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-07\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":187,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-08\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":153,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-09\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":154,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-10\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":128,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":10},{\"day\":\"2020-06-11\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":159,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":22},{\"day\":\"2020-06-12\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":160,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-13\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":186,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":25},{\"day\":\"2020-06-14\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":180,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":25},{\"day\":\"2020-06-15\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":167,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":12},{\"day\":\"2020-06-16\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":155,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":9},{\"day\":\"2020-06-17\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":148,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-18\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":156,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":12},{\"day\":\"2020-06-19\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":178,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":14},{\"day\":\"2020-06-20\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":207,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":22}]}";
const data2 = "{\"groups\":{\"Campaign\":{\"metadata\":{\"name\":\"5a8adbcc-764f-4497-9f88-36ace2108bb6\"}}},\"trend\":[{\"day\":\"2020-06-01\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":11,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":44},{\"day\":\"2020-06-02\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":17,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":45},{\"day\":\"2020-06-03\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":9,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":40},{\"day\":\"2020-06-04\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":9,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":40},{\"day\":\"2020-06-05\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":13,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":58},{\"day\":\"2020-06-06\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":11,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":20},{\"day\":\"2020-06-07\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":7,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":24},{\"day\":\"2020-06-08\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":2,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":11},{\"day\":\"2020-06-09\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":5,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":6},{\"day\":\"2020-06-10\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":3,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":6},{\"day\":\"2020-06-11\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":2,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":3},{\"day\":\"2020-06-12\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":1,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":3},{\"day\":\"2020-06-13\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-14\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-15\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-16\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-17\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-18\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-19\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0},{\"day\":\"2020-06-20\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":0,\"aj_app_ios_installs\":0,\"aj_coh_0w_and_real_acquisition\":0}]}";
const data3 = "{\"groups\":{\"Campaign\":{\"metadata\":{\"name\":\"69435480-5187-4068-b0f0-46a2cb7ecb37\"}}},\"trend\":[{\"day\":\"2020-06-01\",\"aj_coh_0w_ios_real_acquisition\":5,\"aj_app_and_installs\":131,\"aj_app_ios_installs\":11,\"aj_coh_0w_and_real_acquisition\":23},{\"day\":\"2020-06-02\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":110,\"aj_app_ios_installs\":10,\"aj_coh_0w_and_real_acquisition\":22},{\"day\":\"2020-06-03\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":118,\"aj_app_ios_installs\":8,\"aj_coh_0w_and_real_acquisition\":32},{\"day\":\"2020-06-04\",\"aj_coh_0w_ios_real_acquisition\":3,\"aj_app_and_installs\":117,\"aj_app_ios_installs\":13,\"aj_coh_0w_and_real_acquisition\":21},{\"day\":\"2020-06-05\",\"aj_coh_0w_ios_real_acquisition\":2,\"aj_app_and_installs\":135,\"aj_app_ios_installs\":12,\"aj_coh_0w_and_real_acquisition\":21},{\"day\":\"2020-06-06\",\"aj_coh_0w_ios_real_acquisition\":2,\"aj_app_and_installs\":132,\"aj_app_ios_installs\":14,\"aj_coh_0w_and_real_acquisition\":24},{\"day\":\"2020-06-07\",\"aj_coh_0w_ios_real_acquisition\":2,\"aj_app_and_installs\":186,\"aj_app_ios_installs\":7,\"aj_coh_0w_and_real_acquisition\":27},{\"day\":\"2020-06-08\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":113,\"aj_app_ios_installs\":11,\"aj_coh_0w_and_real_acquisition\":16},{\"day\":\"2020-06-09\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":119,\"aj_app_ios_installs\":8,\"aj_coh_0w_and_real_acquisition\":11},{\"day\":\"2020-06-10\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":117,\"aj_app_ios_installs\":11,\"aj_coh_0w_and_real_acquisition\":9},{\"day\":\"2020-06-11\",\"aj_coh_0w_ios_real_acquisition\":1,\"aj_app_and_installs\":134,\"aj_app_ios_installs\":13,\"aj_coh_0w_and_real_acquisition\":22},{\"day\":\"2020-06-12\",\"aj_coh_0w_ios_real_acquisition\":3,\"aj_app_and_installs\":162,\"aj_app_ios_installs\":21,\"aj_coh_0w_and_real_acquisition\":25},{\"day\":\"2020-06-13\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":129,\"aj_app_ios_installs\":16,\"aj_coh_0w_and_real_acquisition\":21},{\"day\":\"2020-06-14\",\"aj_coh_0w_ios_real_acquisition\":3,\"aj_app_and_installs\":123,\"aj_app_ios_installs\":18,\"aj_coh_0w_and_real_acquisition\":16},{\"day\":\"2020-06-15\",\"aj_coh_0w_ios_real_acquisition\":0,\"aj_app_and_installs\":102,\"aj_app_ios_installs\":10,\"aj_coh_0w_and_real_acquisition\":19},{\"day\":\"2020-06-16\",\"aj_coh_0w_ios_real_acquisition\":5,\"aj_app_and_installs\":129,\"aj_app_ios_installs\":12,\"aj_coh_0w_and_real_acquisition\":12},{\"day\":\"2020-06-17\",\"aj_coh_0w_ios_real_acquisition\":3,\"aj_app_and_installs\":117,\"aj_app_ios_installs\":12,\"aj_coh_0w_and_real_acquisition\":9},{\"day\":\"2020-06-18\",\"aj_coh_0w_ios_real_acquisition\":2,\"aj_app_and_installs\":126,\"aj_app_ios_installs\":16,\"aj_coh_0w_and_real_acquisition\":18},{\"day\":\"2020-06-19\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":120,\"aj_app_ios_installs\":12,\"aj_coh_0w_and_real_acquisition\":15},{\"day\":\"2020-06-20\",\"aj_coh_0w_ios_real_acquisition\":4,\"aj_app_and_installs\":137,\"aj_app_ios_installs\":23,\"aj_coh_0w_and_real_acquisition\":14}]}";
data = "[" + data1 + "," + data2 + "," + data3 + "]"
const jsonData = JSON.parse(data)
// Entire visualization
const drawViz = data => {
    console.log(data)
    document.getElementById('content').appendChild(makeChart(data))
}

// Function to draw chart for individual campaigns
const makeChart = data => {
    const svg = d3.create("svg")
        .attr("id", "chartArea")
        .attr("viewBox", [0, 0, svgViewPortWidth, svgViewPortHeight])

    makeCampaigns(data, svg)

    return svg.node()
}

const makeCampaigns = (data, svg) => {
    const campaignData = data
    console.log(svg)
    const yStep = svgViewPortHeight/rowsPerPage;
    for (let i = 0; i < rowsToLoad; i++) {
        const index = i % 3;
        makeCampaign(campaignData[index], svg, i*yStep)
    }
}

const makeCampaign = (campaignData, svg, y) => {
    const campaignName = campaignData.groups.Campaign.metadata.name
    const acqData = campaignData.trend.map(t => t.aj_coh_0w_and_real_acquisition)
    const instData = campaignData.trend.map(t => t.aj_app_and_installs)
    const xStep = svgViewPortWidth/3
    const extraSpace = gap / 2
    makeNameTile(campaignName, svg, extraSpace, y + extraSpace, 'Name')
    makeLineChart(acqData, svg, xStep - extraSpace, y + extraSpace, 'Acq')
    makeLineChart(instData, svg, xStep*2 - extraSpace, y + extraSpace, 'Inst')
}

const makeNameTile = (data, svg, x, y, type) => {
    console.log(data)
    const group = svg.append('svg')
        .attr('class', 'nameArea')
        .attr('x', x)
        .attr('y', y)

    group.append('rect')
        .attr('class', 'namePlate')
        .attr('width', lineChartWidth)
        .attr('height', lineChartHeight)

    group.append('text')
        .attr('class', 'nameText')
        .attr('x', 5)
        .attr('y', 10)
        // .attr("alignment-baseline","middle")
        // .attr("fill","grey")
        .text(data);
}

const makeLineChart = (data, svg, x, y, type) => {
    console.log(data)
    const group = svg.append('svg')
        .attr('class', 'lineChartArea')
        .attr('x', x)
        .attr('y', y)

    const maxData = data.reduce((a, c) => Math.max(a, c))
    
        // const svg = d3.select("#content").append("svg").attr("id","chartArea").attr("height",500).attr("width",500)
    
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, lineChartWidth])
    const yScale = d3.scaleLinear().domain([0, maxData]).range([2, lineChartHeight - 2])
    
    const lineGenerator = d3.line()
        .x((d, i) => {
            // console.log(xScale(i), yScale(d))
            return xScale(i) + 10
        })
        .y((d) => {
            return lineChartHeight - yScale(d)
        })
        .curve(d3.curveMonotoneX)
        // .curve(d3.curveLinear)
    
    const pathAttr = lineGenerator(data)
    const pathAttrSuffix = " L " + (lineChartWidth + 10) + " " + (lineChartHeight) + " L 10 " + (lineChartHeight) + " Z" 
    
    group.append("path")
        .attr("class", "line" + type)
        .attr("d", pathAttr + pathAttrSuffix)
    
    group.append("path")
        .attr("class", "lineBorder" + type)
        .attr("d", pathAttr)
    
    group.selectAll(".points")
        .data(data)
        .enter()
        .append("circle")
            .attr("class", "points points" + type)
            .attr("r", 2)
            .attr("cx", (d, i) => xScale(i) + 10)
            .attr("cy", (d) => lineChartHeight - yScale(d))

}

drawViz(jsonData)