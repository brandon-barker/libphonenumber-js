import metadata from './metadata.min'

import Metadata from '../../../source/metadata'

describe('metadata', () =>
{
	it('should return undefined for non-defined types', function()
	{
		const FR = new Metadata(metadata).country('FR')
		type(FR.type('FIXED_LINE')).should.equal('undefined')
	})
})

function type(something)
{
	return typeof something
}