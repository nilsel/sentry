define([
    "d3",
    "d3-tip",
    "ember"
], function(d3, d3tip, Ember) {
    'use strict';

    function timeSeriesChart() {
      var margin = {top: 20, right: 20, bottom: 20, left: 20},
          width = 760,
          height = 120,
          xValue = function(d) { return d[0]; },
          yValue = function(d) { return d[1]; },
          xScale = d3.time.scale(),
          yScale = d3.scale.linear(),
          yAxis = d3.svg.axis().scale(yScale).orient("left"),
          xAxis = d3.svg.axis().scale(xScale).orient("bottom").tickSize(6, 0);

      function chart(selection) {
        selection.each(function(data) {
          // Convert data to standard representation greedily;
          // this is needed for nondeterministic accessors.

          data = data.map(function(d, i) {
            return [xValue.call(data, d, i), yValue.call(data, d, i)];
          });

          // Update the x-scale.
          xScale
            .domain(data.map(function(d) { return d[0]; }))
            .rangeRound([0, width - margin.left - margin.right]);

          // Update the y-scale
          yScale
            .domain([0, d3.max(data, function(d) { return d[1]; })])
            .range([height - margin.top - margin.bottom, 0]);

          var tip = d3tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
              return "<strong>Frequency:</strong> <span style='color:red'>" + d[1] + "</span>";
            });

          var svg = d3.select(this).append("svg")
              .attr("width", width)
              .attr("height", height)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          svg.call(tip);

          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + yScale.range()[0] + ")")
              .call(xAxis);

          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis)
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Frequency");

          svg.selectAll(".bar")
              .data(data)
            .enter().append("rect")
              .attr("class", "bar")
              .attr("x", X)
              .attr("y", Y)
              .attr("width", function(d) { return width / data.length; })
              .attr("height", function(d) { return height - yScale(d[1]); })
              .on('mouseover', tip.show)
              .on('mouseout', tip.hide);
        });
      }

      // The x-accessor for the path generator; xScale ∘ xValue.
      function X(d) {
        return xScale(d[0]);
      }

      // The y-accessor for the path generator; yScale ∘ yValue.
      function Y(d) {
        return height - margin.top - margin.bottom - (height - margin.top - margin.bottom - yScale(d[1]));
      }

      chart.margin = function(_) {
        if (!arguments.length) return margin;
        margin = _;
        return chart;
      };

      chart.width = function(_) {
        if (!arguments.length) return width;
        width = _;
        return chart;
      };

      chart.height = function(_) {
        if (!arguments.length) return height;
        height = _;
        return chart;
      };

      chart.x = function(_) {
        if (!arguments.length) return xValue;
        xValue = _;
        return chart;
      };

      chart.y = function(_) {
        if (!arguments.length) return yValue;
        yValue = _;
        return chart;
      };

      return chart;
    }

    var BarChartComponent = Ember.Component.extend({
        tagName: 'figure',
        attributeBindings: 'width height'.w(),
        margin: {top: 20, right: 20, bottom: 30, left: 40},

        w: function(){
            return this.get('width') - this.get('margin.left') - this.get('margin.right');
        }.property('width'),

        h: function(){
            return this.get('height') - this.get('margin.top') - this.get('margin.bottom');
        }.property('height'),

        transformG: function(){
            return "translate(" + this.get('margin.left') + "," + this.get('margin.top') + ")";
        }.property(),

        transformX: function(){
            return "translate(0,"+ this.get('h') +")";
        }.property('h'),

        draw: function(){
            var chart = timeSeriesChart()
                .x(function(d) { return new Date(d.time * 1000); })
                .y(function(d) { return d.count; })
                .width(this.get('width'))
                .height(this.get('height'));

            d3.select('#' + this.get('elementId'))
                .datum(this.get('data'))
                .call(chart);
        },

        didInsertElement: function(){
            this.draw();
        }
    });

    Ember.Handlebars.helper('bar-chart', BarChartComponent);

    return BarChartComponent;
});
